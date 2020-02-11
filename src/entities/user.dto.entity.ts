import {v4String} from 'uuid/interfaces';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';
import {Path} from 'typescript-rest';
import {IPurchase, Purchase} from './purchase.entity';
import {IUser} from './user.entity';

/**
 * Creates a new UserDTO
 *
 * @class
 * @implements {IUser}
 */
@ApiModel({
    description: 'User DTO Model',
    name: 'UserDTO',
})
@Path('UserDTO')
export class UserDTO implements IUser {

    @ApiModelProperty({
        description: 'Id of a User',
        required: true,
        type: 'v4String',
        example: ['75442486-0878-440c-9db1-a7006c25a39f'],
    })
    public id: v4String;

    @ApiModelProperty({
        description: 'Firstname of the user',
        required: true,
        example: ['Ronan', 'Alexis', 'Louka', 'Rémi'],
    })
    public firstName: string;

    @ApiModelProperty({
        description: 'Lastname of the user',
        required: true,
        example: ['Laplaud', 'Leroy', 'Houlgatte--Bustamante', 'Castel'],
    })
    public lastName: string;

    @ApiModelProperty({
        description: 'Purchases of the user',
        required: true,
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: 'Purchase',
    })
    public purchases: IPurchase[];

    constructor(firstName: string, id: v4String, lastName: string, purchases: IPurchase[]) {
        this.firstName = firstName;
        this.id = id;
        this.lastName = lastName;
        this.purchases = purchases;
    }
}
