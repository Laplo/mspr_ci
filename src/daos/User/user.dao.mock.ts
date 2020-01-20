import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IUserDao } from './user.dao';
import {IUser} from '@entities';
import {NameCallerArgsReturnLogDaosInfoLevel} from '@shared';

export class UserDao extends MockDaoMock implements IUserDao {

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getAll(): Promise<IUser[]> {
        try {
            const db = await super.openDb();
            return db.users;
        } catch (err) {
            throw err;
        }
    }
}
