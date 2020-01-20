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
export const NameCallerArgsReturnLogControllersInfoLevel = (className: string) => {
    return beforeMethod((meta) => {
        controllerLogger.info('Inside ' + className);
        controllerLogger.info(meta.method.name + ' called');
    });
};

const daoLogger = getLogger('daos');
export const NameCallerArgsReturnLogDaosInfoLevel = (className: string) => beforeMethod((meta) => {
    daoLogger.info('Inside ' + className);
    daoLogger.info(meta.method.name + ' called');
});

const serviceLogger = getLogger('services');
export const NameCallerArgsReturnLogServicesInfoLevel = (className: string) => beforeMethod((meta) => {
    serviceLogger.info('Inside ' + className);
    serviceLogger.info(meta.method.name + ' called');
});
