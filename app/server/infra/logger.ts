import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: format.combine(
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [new transports.Console()],
});
