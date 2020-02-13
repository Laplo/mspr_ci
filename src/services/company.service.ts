import {PurchaseDao} from '@daos';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';
import {TotalRevenue} from '../entities/total-revenue.entity';
import {IPurchaseDao} from '../daos/Purchase/purchase.dao';
import {calculateTax} from '../shared/CalculateTax';

let ICompanyService = 1;
/**
 * Interface for classes that represent a company service
 * @todo add for differents companies
 * @since 1.0.1
 * @interface
 */
ICompanyService = 1;
export interface ICompanyService {
    getTotalRevenue: () => Promise<TotalRevenue>;
}

/**
 * Creates a new CompanyService
 *
 * @classdesc Service called to get informations about companies
 * @class
 * @since 1.0.1
 * @implements {ICompanyService}
 */
export class CompanyService implements ICompanyService {

    /**
     * Member which ask the database
     * @type IPurchaseDao
     * @private
     */
    private purchaseDao: IPurchaseDao = new PurchaseDao();

    @NameCallerArgsReturnLogServicesInfoLevel('Company')
    /**
     * Returns the total revenue of my company
     * @function
     * @returns {Promise<TotalRevenue>}
     */
    public async getTotalRevenue(): Promise<TotalRevenue> {
        let excludingTax: number = 0;
        const purchases = await this.purchaseDao.getAll();
        purchases.forEach((purchase) => {
            excludingTax += purchase.product.price;
        });
        return calculateTax(excludingTax);
    }
}
