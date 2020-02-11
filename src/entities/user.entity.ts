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

let IUser = 1;
/**
 * Interface for classes that represent an user
 *
 * @interface
 */
IUser = 1;
export interface IUser {
    id: v4String;
    firstName: string;
    lastName: string;
    purchases: IPurchase[];
}

let UserDoc = 1;
@ApiModel({
    description: 'User Model',
    name: 'User',
})
@Path('User')
@Table({tableName: 'users', paranoid: true})
/**
 * Creates a new User
 * @classdesc Database users
 * @class
 * @public
 * @implements {IUser}
 * @hideconstructor
 */
export class User extends Model<User> implements IUser {

    @ApiModelProperty({
        description: 'Id of a User',
        required: true,
        type: 'v4String',
        example: ['75442486-0878-440c-9db1-a7006c25a39f'],
    })
    @PrimaryKey
    @Default(DataTypes.UUIDV4)
    @Column(DataTypes.UUID)
    /**
     * Id of the user
     * @member User#id
     * @public
     * @type {v4String}
     */
    public id!: v4String;

    @ApiModelProperty({
        description: 'Firstname of the user',
        required: true,
        example: ['Ronan', 'Alexis', 'Louka', 'Rémi'],
    })
    @AllowNull(false)
    @Column(DataTypes.STRING)
    /**
     * FirstName of the user
     * @member User#firstName
     * @public
     * @type {string}
     */
    public firstName!: string;

    @ApiModelProperty({
        description: 'Lastname of the user',
        required: true,
        example: ['Laplaud', 'Leroy', 'Houlgatte--Bustamante', 'Castel'],
    })
    @AllowNull(false)
    @Column(DataTypes.STRING)
    /**
     * LastName of the user
     * @member User#lastName
     * @public
     * @type {string}
     */
    public lastName!: string;

    /**
     * Purchases of the user
     * @member User#purchases
     * @public
     * @type {IPurchase[]}
     */
    @HasMany(() => Purchase, 'userId')
    public purchases!: IPurchase[];
}
UserDoc = 1;
