import {v4String} from 'uuid/interfaces';
import {IPurchase} from '@entities';
import {PurchaseDao} from '@daos';
import {IPurchaseDao} from '../daos/Purchase/purchase.dao';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';

export interface IPurchaseService {
    getByUserId: (id: v4String) => Promise<IPurchase[]>;
}

export class PurchaseService implements IPurchaseService {

    private purchaseDao: IPurchaseDao = new PurchaseDao();

    @NameCallerArgsReturnLogServicesInfoLevel('Purchase')
    public getByUserId(id: v4String): Promise<IPurchase[]> {
        return this.purchaseDao.getByUserId(id);
    }
}
