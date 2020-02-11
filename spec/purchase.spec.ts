import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import {pErr} from '@shared';
import {NOT_FOUND} from 'http-status-codes';
import v4 from 'uuid/v4';
import app from '../src/app';
const baseUrl = '/purchases/';

describe('Purchases Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe('GET /', () => {
        it('returns status code 404', (done) => {
            agent.get(baseUrl + v4())
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(NOT_FOUND);
                    done();
                });
        });
    });
});
