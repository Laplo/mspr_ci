import { globalInfoLogger } from './Logger';

export const pErr = (err: Error) => {
    if (err) {
        globalInfoLogger.error(err);
    }
};
