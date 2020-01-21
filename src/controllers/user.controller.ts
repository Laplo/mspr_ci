import {
    ApiOperationGet,
    ApiPath,
    SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import {controller, httpGet, interfaces, queryParam} from 'inversify-express-utils';
import {v4String} from 'uuid/interfaces';
import * as express from 'express';
import {BAD_REQUEST, OK} from 'http-status-codes';
import {globalInfoLogger, NameCallerArgsReturnLogControllersInfoLevel} from '@shared';
import {IUserService, UserService} from '../services/user.service';

interface IUserController {
    getAll: (
        id: v4String,
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
        @queryParam('id') id: v4String,
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
}
