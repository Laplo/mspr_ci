import {
    ApiOperationGet,
    ApiPath,
} from 'swagger-express-ts';
import {controller, httpGet, interfaces} from 'inversify-express-utils';
import * as express from 'express';
import {NOT_FOUND, OK} from 'http-status-codes';
import {globalInfoLogger, NameCallerArgsReturnLogControllersInfoLevel} from '@shared';
import {CompanyService, ICompanyService} from '../services/company.service';

interface ICompanyController {
    getTotalRevenue: (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<express.Response>;
}

@ApiPath({
    path: '/company',
    name: 'Company',
})
@controller(
    '/company',
)
export class CompanyController implements interfaces.Controller, ICompanyController {

    private companyService: ICompanyService = new CompanyService();

    public static TARGET_NAME = 'companyController';

    @NameCallerArgsReturnLogControllersInfoLevel('Company')
    @ApiOperationGet({
        description: 'Get total revenue of the company',
        summary: 'Get total revenue of the company',
        path: '/totalRevenue',
        responses: {
            200: {
                description: 'Success',
                model: 'TotalRevenue',
            },
            400: {
                description: 'Bad request',
            },
        },
    })
    @httpGet('/totalRevenue')
    public async getTotalRevenue(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<express.Response> {
        try {
            const totalRevenue = await this.companyService.getTotalRevenue();
            return response.status(OK).json({totalRevenue});
        } catch (err) {
            globalInfoLogger.error(err.message, err);
            return response.status(NOT_FOUND).json({
                error: err.message,
            });
        }
    }
}
