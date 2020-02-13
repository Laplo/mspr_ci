import app from '../src/app';
import supertest from 'supertest';

import { Response, SuperTest, Test } from 'supertest';
import {pErr} from '@shared';
import {NOT_FOUND, OK} from 'http-status-codes';
import {IProduct, IPurchase, ITotalRevenue, IUser} from '@entities';
import {CompanyService} from '../src/services/company.service';
import {v4String} from 'uuid/interfaces';
import {PurchaseDao} from '@daos';
const baseUrl = '/company/';

describe('Company Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    const totalRevenue = {
        excludingTax: 20,
        includingTax: 24,
    } as ITotalRevenue;

    const purchases = [
        {
            userId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee3' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {
                id: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
                name: 'ventoline',
                price: 5,
                purchases: [],
            } as IProduct,
        } as IPurchase,
        {
            userId: '62c0eab7-78ea-45f9-b552-0a83209ff02c' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {
                id: 'c498e2aa-1c42-4827-80be-9fc6edeeaee7' as unknown as v4String,
                name: 'gingembre',
                price: 15,
                purchases: [],
            } as IProduct,
        } as IPurchase,
    ];

    describe('GET /', () => {
        it('returns status code 404', (done) => {
            agent.get(baseUrl)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(NOT_FOUND);
                    done();
                });
        });
    });

    describe('GET /totalRevenue', () => {
        it('returns status code 200', (done) => {
            spyOn(PurchaseDao.prototype, 'getAll').and.returnValue(Promise.resolve(purchases));
            agent.get(baseUrl + 'totalRevenue')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    done();
                });
        });

        it('spy on dao should return correct total revenue', (done) => {
            spyOn(PurchaseDao.prototype, 'getAll').and.returnValue(Promise.resolve(purchases));
            agent.get(baseUrl + 'totalRevenue')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retTot = res.body.totalRevenue;
                    expect(retTot).toEqual(totalRevenue);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it('controller should return a JSON object with the total Revenue', (done) => {
            spyOn(CompanyService.prototype, 'getTotalRevenue').and.returnValue(Promise.resolve(totalRevenue));
            agent.get(baseUrl + 'totalRevenue')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retTot = res.body.totalRevenue;
                    expect(retTot).toEqual(totalRevenue);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });
});
