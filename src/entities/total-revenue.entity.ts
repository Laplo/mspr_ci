import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import {Path} from 'typescript-rest';

let ITotalRevenue = 1;
/**
 * Interface for classes that represent a total revenue
 *
 * @since 1.0.1
 * @interface
 */
ITotalRevenue = 1;
export interface ITotalRevenue {
    excludingTax: number;
    includingTax: number;
}

/**
 * Creates a new TotalRevenue
 * @classdesc Total revenue of a company
 *
 * @class
 * @since 1.0.1
 * @public
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
