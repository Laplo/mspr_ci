import {calculateTax} from '../../src/shared/CalculateTax';

describe('company total revenue', () => {
   it('should return the correct object of ITotalRevenue with correct parameter', () => {
       const objectTax = calculateTax(100);
       expect(objectTax.includingTax).toEqual(120);
       expect(objectTax.excludingTax).toEqual(100);
    });

   it('should throw an Error because of bad parameter', () => {
       expect(() => calculateTax(-1)).toThrow();
   });
});
