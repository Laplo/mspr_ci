import {
    Table,
    Column,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {v4String} from 'uuid/interfaces';
import {IUser, User} from './user.entity';
import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import {Path} from 'typescript-rest';
import {IProduct, Product} from './product.entity';

export interface IPurchase {
    userId: v4String;
    user: IUser;
    productId: v4String;
    product: IProduct;
}

@ApiModel({
    description: 'Purchase Model',
    name: 'Purchase',
})
@Path('Purchase')
@Table({tableName: 'purchases'})
export class Purchase extends Model<Purchase> implements IPurchase {

    @ApiModelProperty({
        description: 'Id of the user',
        type: 'v4String',
        required: true,
        example: ['75442486-0878-440c-9db1-a7006c25a39f'],
    })
    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataTypes.UUID)
    public userId!: v4String;

    @BelongsTo(() => User)
    public user!: IUser;

    @ApiModelProperty({
        description: 'Id of the product',
        type: 'v4String',
        required: true,
        example: ['75442486-0878-440c-9db1-a7006c25a39f'],
    })
    @PrimaryKey
    @ForeignKey(() => Product)
    @Column( DataTypes.UUID)
    public productId!: v4String;

    @BelongsTo(() => Product)
    public product!: IProduct;
}
