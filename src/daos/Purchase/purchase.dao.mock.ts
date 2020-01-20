import { MockDaoMock } from '../MockDb/MockDao.mock';
import {v4String} from 'uuid/interfaces';
import {IPurchase, IUser} from '@entities';
import {IPurchaseDao} from './purchase.dao';
import {NameCallerArgsReturnLogDaosInfoLevel} from '@shared';

export class PurchaseDao extends MockDaoMock implements IPurchaseDao {

    @NameCallerArgsReturnLogDaosInfoLevel('Purchase')
    public async getByUserId(userId: v4String): Promise<IPurchase[]> {
        try {
            const db = await super.openDb();
            return db.users;
        } catch (err) {
            throw err;
        }
    }
}
