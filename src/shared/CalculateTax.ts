import {ITotalRevenue, TotalRevenue} from '@entities';

export const calculateTax = (a: number): ITotalRevenue => {
    return new TotalRevenue(a, a + ((20 * a) / 100));
};
