import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import {Path} from 'typescript-rest';

/**
 * Interface for classes that represent a total revenue
 *
 * @interface
 */
export interface ITotalRevenue {
    excludingTax: number;
    includingTax: number;
}

/**
 * Creates a new TotalRevenue
 *
 * @class
 * @implements {ITotalRevenue}
 */
@ApiModel({
    description: 'Total Revenue Model',
    name: 'TotalRevenue',
})
@Path('TotalRevenue')
export class TotalRevenue implements ITotalRevenue {

    @ApiModelProperty({
        description: 'Total revenue excluding taxes',
        required: true,
        example: [1500.35, 10000005, 35487.3],
    })
    public excludingTax: number;

    @ApiModelProperty({
        description: 'Total revenue including taxes',
        required: true,
        example: [1500.35, 10000005, 35487.3],
    })
    public includingTax: number;

    constructor(excludingTax: number, includingTax: number) {
        this.excludingTax = excludingTax;
        this.includingTax = includingTax;
    }
}
