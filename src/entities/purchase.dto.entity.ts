import {v4String} from 'uuid/interfaces';
import {IUser, User} from './user.entity';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';
import {Path} from 'typescript-rest';
import {IProduct, Product} from './product.entity';
import {IPurchase} from './purchase.entity';

/**
 * Creates a new PurchaseDTO
 *
 * @class
 */
@ApiModel({
    description: 'Purchase DTO Model',
    name: 'PurchaseDTO',
})
@Path('PurchaseDTO')
export class PurchaseDTO implements IPurchase {

    public userId!: v4String;

    @ApiModelProperty({
        description: 'The user who made the purchase',
        required: true,
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: 'User',
    })
    public user!: IUser;

    public productId!: v4String;

    @ApiModelProperty({
        description: 'The product which was purchased',
        required: true,
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: 'Product',
    })
    public product!: IProduct;
}
