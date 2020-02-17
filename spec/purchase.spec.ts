import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import {pErr} from '@shared';
import {NOT_FOUND, OK} from 'http-status-codes';
import app from '../src/app';
import {v4String} from 'uuid/interfaces';
import {IPurchase} from '@entities';
import {PurchaseService} from '../src/services/purchase.service';
import {PurchaseDao} from '@daos';
const baseUrl = '/purchases/';

describe('Purchases Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    const purchases = [
        {
            userId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee3' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {},
        } as IPurchase,
        {
            userId: '62c0eab7-78ea-45f9-b552-0a83209ff02c' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {},
        } as IPurchase,
        {
            userId: '98538928-ebd0-441e-9720-81e31ef81a3a' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {},
        } as IPurchase,
        {
            userId: 'e9637ce2-c4ed-43c0-b971-73b998663b23' as unknown as v4String,
            user: {},
            productId: 'c498e2aa-1c42-4827-80be-9fc6edeeaee8' as unknown as v4String,
            product: {},
        } as IPurchase,
    ];

    describe('GET /user/{id}', () => {
        it('returns status code 404', (done) => {
            agent.get(baseUrl + 'c498e2aa-1c42-4827-80be-9fc6edeeaee5')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(NOT_FOUND);
                    done();
                });
        });

        it('controller should return a JSON object with the requested user', (done) => {
            spyOn(PurchaseService.prototype, 'getByUserId').and.returnValue(Promise.resolve(purchases));
            agent.get(baseUrl + 'user/c498e2aa-1c42-4827-80be-9fc6edeeaee3')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    const retPurchases = res.body.purchases;
                    expect(retPurchases).toEqual(purchases);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it('service should return a JSON object with the requested user', (done) => {
            spyOn(PurchaseDao.prototype, 'getByUserId').and.returnValue(Promise.resolve(purchases));
            agent.get(baseUrl + 'user/c498e2aa-1c42-4827-80be-9fc6edeeaee3')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    const retPurchases = res.body.purchases;
                    expect(retPurchases).toEqual(purchases);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });
});
