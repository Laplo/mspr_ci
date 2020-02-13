import {ITotalRevenue, TotalRevenue} from '@entities';

export const calculateTax = (excludingTaxPrice: number): ITotalRevenue => {
    if (excludingTaxPrice < 0 ) {
        throw new Error("Excluding Tax Price is under 0");
    }
    return new TotalRevenue(excludingTaxPrice, excludingTaxPrice + ((20 * excludingTaxPrice) / 100));
};
