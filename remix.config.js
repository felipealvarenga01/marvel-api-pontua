const { createRoutesFromFolders } = require('@remix-run/v1-route-convention');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['app/**/*', 'mocks-cache/**/*'],
  serverModuleFormat: 'cjs',
  publicPath: "/build/",
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};
