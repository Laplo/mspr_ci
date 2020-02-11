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
import {IPurchaseService, PurchaseService} from '../services/purchase.service';
import {injectable} from 'inversify';

interface IPurchaseController {
    getByUserId: (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<express.Response>;
}

@ApiPath({
    path: '/purchases',
    name: 'Purchase',
})
@controller(
    '/purchases',
)
@injectable()
export class PurchaseController implements interfaces.Controller, IPurchaseController {

    private purchaseService: IPurchaseService = new PurchaseService();

    public static TARGET_NAME = 'PurchaseController';

    @NameCallerArgsReturnLogControllersInfoLevel('Purchase')
    @ApiOperationGet({
        description: 'Get purchases by user id',
        summary: 'Get purchases of an existing user',
        path: '/{id}',
        responses: {
            200: {
                description: 'Success',
                type: SwaggerDefinitionConstant.Response.Type.ARRAY,
                model: 'PurchaseDTO',
            },
            400: {
                description: 'Bad request',
            },
        },
    })
    @httpGet('/user/:id')
    public async getByUserId(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<express.Response> {
        const {id} = request.params;
        try {
            const purchases = await this.purchaseService.getByUserId(id as unknown as v4String);
            return response.status(OK).json({purchases});
        } catch (err) {
            globalInfoLogger.error(err.message, err);
            return response.status(NOT_FOUND).json({
                error: err.message,
            });
        }
    }
}
