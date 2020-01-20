import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IUserDao } from './user.dao';
import {v4String} from 'uuid/interfaces';
import {IUser} from '@entities';

export class UserDao extends MockDaoMock implements IUserDao {

    public async getAll(): Promise<IUser[]> {
        try {
            const db = await super.openDb();
            return db.users;
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: v4String): Promise<IUser> {
        return null as any;
    }
}
