import app from '../src/app';
import supertest from 'supertest';

import { Response, SuperTest, Test } from 'supertest';
import {pErr} from '@shared';
import {OK} from 'http-status-codes';
const baseUrl = '/users/';

describe('Users Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe('GET /', () => {
        it('returns status code 200', (done) => {
            agent.get(baseUrl)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    done();
                });
        });
    });
});
