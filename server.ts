import {createRequestHandler} from "@remix-run/express";
import compression from "compression";
import express from 'express';
import morgan from "morgan";
import path from "path";
import {flushCache} from "./app/server/infra/global-cache/global-cache";
import {logger} from "./app/server/infra/logger";
import {enableMock} from "./mocks";

const BUILD_DIR = path.join(process.cwd(), 'build');

const app = express();

app.use(compression());



// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// Remix fingerprints its assets so we can cache forever.
app.use(
    '/build',
    express.static('public/build', {immutable: true, maxAge: '1y'}),
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', {maxAge: '1h'}));

const modeUse = process.env.NODE_ENV;

if (modeUse !== 'production') {

    app.use(morgan('dev'));
    enableMock()

}
else {
    app.use(
        morgan('tiny', {
            skip: (_, res) => res.statusCode < 400,
        })
    )
}

app.all(
    '*',
    process.env.NODE_ENV !== 'production'
        ? (req, res, next) => {
            purgeRequireCache();

            return createRequestHandler({
                build: require(BUILD_DIR),
                mode: modeUse,
            })(req, res, next);
        }
        : createRequestHandler({
            build: require(BUILD_DIR),
            mode: process.env.NODE_ENV,
        }),
);
const port = process.env.PORT || 3001;

flushCache().then(() => {
    app.listen(port, () => {
        logger.info(`Express server listening on port ${port}. Access: http://localhost:${port}`);
    });
});

function purgeRequireCache() {
    // purge require cache on requests for "server side HMR" this won't let
    // you have in-memory objects between requests in development,
    // alternatively you can set up nodemon/pm2-dev to restart the server on
    // file changes, but then you'll have to reconnect to databases/etc on each
    // change. We prefer the DX of this, so we've included it for you by default
    for (const key in require.cache) {
        if (key.startsWith(BUILD_DIR)) {
            delete require.cache[key];
        }
    }
}
