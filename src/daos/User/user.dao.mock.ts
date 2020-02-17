import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IUserDao } from './user.dao';
import {IUser} from '@entities';
import {globalInfoLogger, NameCallerArgsReturnLogDaosInfoLevel} from '@shared';
import {v4String} from 'uuid/interfaces';

export class UserDao extends MockDaoMock implements IUserDao {

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getAll(): Promise<IUser[]> {
        try {
            const db = await super.openDb();
            return db.users;
        } catch (err) {
            globalInfoLogger.error(err);
            throw err;
        }
    }

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getById(id: v4String): Promise<IUser | null> {
        try {
            const db = await super.openDb();
            if (db.users === undefined || db.users.length < 0) {
                return null;
            }
            return db.users.filter((user: IUser) => user.id === id);
        } catch (err) {
            globalInfoLogger.error(err);
            throw err;
        }
    }
}
