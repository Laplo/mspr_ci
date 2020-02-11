import { configure, getLogger } from 'log4js';
import {beforeMethod} from 'kaop-ts';
configure({
    appenders: {
        controllers: { type: 'console' },
        daos: { type: 'console' },
        global: { type: 'console' },
        services: { type: 'console' },
    },
    categories: {
        controllers: {
            appenders: [
                'controllers',
            ],
            level: 'info',
        },
        daos: {
            appenders: [
                'daos',
            ],
            level: 'info',
        },
        default: {
            appenders: [
                'global',
            ],
            level: 'info',
        },
        services: {
            appenders: [
                'daos',
            ],
            level: 'info',
        },
    },
});

export const globalInfoLogger = getLogger();

const controllerLogger = getLogger('controllers');
/**
 * Log with level info different informations about the called controller
 * @function
 * @name NameCallerArgsReturnLogControllersInfoLevel
 * @param className
 * @version 1.0.0
 */
export const NameCallerArgsReturnLogControllersInfoLevel = (className: string) => {
    return beforeMethod((meta) => {
        controllerLogger.info('Inside ' + className);
        controllerLogger.info(meta.method.name + ' called');
    });
};

const daoLogger = getLogger('daos');
/**
 * Log with level info different informations about the called dao
 * @function
 * @name NameCallerArgsReturnLogDaosInfoLevel
 * @param className
 * @version 1.0.0
 */
export const NameCallerArgsReturnLogDaosInfoLevel = (className: string) => beforeMethod((meta) => {
    daoLogger.info('Inside ' + className);
    daoLogger.info(meta.method.name + ' called');
});

const serviceLogger = getLogger('services');
/**
 * Log with level info different informations about the called service
 * @function
 * @name NameCallerArgsReturnLogServicesInfoLevel
 * @param className
 * @version 1.0.0
 */
export const NameCallerArgsReturnLogServicesInfoLevel = (className: string) => beforeMethod((meta) => {
    serviceLogger.info('Inside ' + className);
    serviceLogger.info(meta.method.name + ' called');
});
