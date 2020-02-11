import {v4String} from 'uuid/interfaces';
import {IPurchase} from '@entities';
import {PurchaseDao} from '@daos';
import {IPurchaseDao} from '../daos/Purchase/purchase.dao';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';

let IPurchaseService = 1;
/**
 * Interface for classes that represent a purchase service
 * @interface
 */
IPurchaseService = 1;
export interface IPurchaseService {
    getByUserId: (id: v4String) => Promise<IPurchase[]>;
}

/**
 * Creates a new PurchaseService
 *
 * @classdesc Service called to get informations about purchases
 * @class
 * @implements {IPurchaseService}
 */
export class PurchaseService implements IPurchaseService {

    private purchaseDao: IPurchaseDao = new PurchaseDao();

    /**
     * Returns purchases of the user
     * @param {v4String} id
     * @returns {Promise<IPurchase[]>}
     */
    @NameCallerArgsReturnLogServicesInfoLevel('Purchase')
    public getByUserId(id: v4String): Promise<IPurchase[]> {
        return this.purchaseDao.getByUserId(id);
    }
}
