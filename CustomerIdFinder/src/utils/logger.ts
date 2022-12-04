import { createLogger, format, transports } from 'winston';

const fileErrorLogger = createLogger({
transports:
    new transports.File({
    filename: 'logs/fileError.log',
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
});

const networkErrorLogger = createLogger({
    transports:
        new transports.File({
        filename: 'logs/networkError.log',
        format:format.combine(
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )}),
});

const implicitErrorLogger = createLogger({
    transports:
        new transports.File({
        filename: 'logs/implicitError.log',
        format:format.combine(
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )}),
});

export {
    networkErrorLogger,
    fileErrorLogger,
    implicitErrorLogger
};
