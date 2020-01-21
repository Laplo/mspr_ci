import {
    ApiOperationGet,
    ApiPath,
    SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import {controller, httpGet, interfaces, queryParam} from 'inversify-express-utils';
import {v4String} from 'uuid/interfaces';
import * as express from 'express';
import {BAD_REQUEST, NOT_FOUND, OK} from 'http-status-codes';
import {globalInfoLogger, NameCallerArgsReturnLogControllersInfoLevel} from '@shared';
import {IUserService, UserService} from '../services/user.service';

interface IUserController {
    getAll: (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<express.Response>;
    getById: (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<express.Response>;
}

@ApiPath({
    path: '/users',
    name: 'User',
})
@controller(
    '/users',
)
export class UserController implements interfaces.Controller, IUserController {

    private userService: IUserService = new UserService();

    public static TARGET_NAME = 'userController';

    @NameCallerArgsReturnLogControllersInfoLevel('User')
    @ApiOperationGet({
        description: 'Get users',
        summary: 'Get all users',
        responses: {
            200: {
                description: 'Success',
                type: SwaggerDefinitionConstant.Response.Type.ARRAY,
                model: 'UserDTO',
            },
            400: {
                description: 'Bad request',
            },
        },
    })
    @httpGet('')
    public async getAll(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<express.Response> {
        try {
            const users = await this.userService.getAll();
            return response.status(OK).json({users});
        } catch (err) {
            globalInfoLogger.error(err.message, err);
            return response.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @NameCallerArgsReturnLogControllersInfoLevel('User')
    @ApiOperationGet({
        description: 'Get user by his id',
        summary: 'Get details of a user specifying his id',
        path: '/{id}',
        responses: {
            200: {
                description: 'Success',
                model: 'User',
            },
            404: {
                description: 'Not found',
            },
        },
    })
    @httpGet('/:id')
    public async getById(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<express.Response> {
        try {
            const user = await this.userService.getById(request.params.id as unknown as v4String);
            if (user === null) {
                return response.status(NOT_FOUND).json({
                    error: 'User not found',
                });
            }
            return response.status(OK).json({user});
        } catch (err) {
            globalInfoLogger.error(err.message, err);
            return response.status(NOT_FOUND).json({
                error: err.message,
            });
        }
    }
}
