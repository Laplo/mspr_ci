import {v4String} from 'uuid/interfaces';
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Default,
    ForeignKey, AllowNull,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import {Path} from 'typescript-rest';

export interface IUser {
    id?: v4String;
    firstName?: string;
    lastName?: string;
}

@ApiModel({
    description: 'User Model',
    name: 'User',
})
@Path('User')
@Table({tableName: 'users'})
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
    public id?: v4String;

    @ApiModelProperty({
        description: 'Firstname of the user',
        required: true,
        example: ['Ronan', 'Alexis', 'Louka', 'Rémi'],
    })
    @AllowNull(false)
    @Column(DataTypes.STRING)
    public firstName?: string;

    @ApiModelProperty({
        description: 'Lastname of the user',
        required: true,
        example: ['Laplaud', 'Leroy', 'Houlgatte--Bustamante', 'Castel'],
    })
    @AllowNull(false)
    @Column(DataTypes.STRING)
    public lastName?: string;
}
