import {PurchaseDao} from '@daos';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';
import {ITotalRevenue, TotalRevenue} from '../entities/total-revenue.entity';
import {IPurchaseDao} from '../daos/Purchase/purchase.dao';

export interface ICompanyService {
    getTotalRevenue: () => Promise<TotalRevenue>;
}

export class CompanyService implements ICompanyService {

    private purchaseDao: IPurchaseDao = new PurchaseDao();

    @NameCallerArgsReturnLogServicesInfoLevel('Company')
    public async getTotalRevenue(): Promise<TotalRevenue> {
        let excludingTax: number = 0;
        const purchases = await this.purchaseDao.getAll();
        purchases.forEach((purchase) => {
            excludingTax += purchase.product.price;
        });
        return new TotalRevenue(
            excludingTax,
            excludingTax + ((20 * excludingTax) / 100),
        );
    }
}
