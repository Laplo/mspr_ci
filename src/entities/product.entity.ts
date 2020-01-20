import {v4String} from 'uuid/interfaces';
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Default,
    AllowNull, HasMany,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import {Path} from 'typescript-rest';
import {IPurchase, Purchase} from './purchase.entity';

export interface IProduct {
    id: v4String;
    name: string;
    price: number;
    purchases: IPurchase[];
}

@ApiModel({
    description: 'Product Model',
    name: 'Product',
})
@Path('Product')
@Table({tableName: 'products', paranoid: true})
export class Product extends Model<Product> implements IProduct {

    @ApiModelProperty({
        description: 'Id of a product',
        required: true,
        type: 'v4String',
        example: ['75442486-0878-440c-9db1-a7006c25a39f'],
    })
    @PrimaryKey
    @Default(DataTypes.UUIDV4)
    @Column(DataTypes.UUID)
    public id!: v4String;

    @ApiModelProperty({
        description: 'Name of the product',
        required: true,
        example: ['Lait', 'Oeuf', 'Saucisson', 'Captain'],
    })
    @AllowNull(false)
    @Column(DataTypes.STRING)
    public name!: string;

    @ApiModelProperty({
        description: 'Price of the product',
        required: true,
        example: [0.97, 3, 15.2],
    })
    @AllowNull(false)
    @Column(DataTypes.FLOAT)
    public price!: number;

    @HasMany(() => Purchase, 'productId')
    public purchases!: IPurchase[];

}
