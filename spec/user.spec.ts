import app from '../src/app';
import supertest from 'supertest';

import { Response, SuperTest, Test } from 'supertest';
import {pErr} from '@shared';
import {NOT_FOUND, OK} from 'http-status-codes';
import {UserService} from '../src/services/user.service';
import {IUser} from '@entities';
import {v4String} from 'uuid/interfaces';
import {UserDao} from '@daos';
const baseUrl = '/users/';

describe('Users Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    const user = {
        id: 'c498e2aa-1c42-4827-80be-9fc6edeeaee3' as unknown as v4String,
        firstName: 'Ronan',
        lastName: 'Laplaud',
        purchases: [],
    } as IUser;

    const users = [
        {
            id: 'c498e2aa-1c42-4827-80be-9fc6edeeaee3' as unknown as v4String,
            firstName: 'Ronan',
            lastName: 'Laplaud',
            purchases: [],
        } as IUser,
        {
            id: '62c0eab7-78ea-45f9-b552-0a83209ff02c' as unknown as v4String,
            firstName: 'Louka',
            lastName: 'Houlgatte',
            purchases: [],
        } as IUser,
        {
            id: '98538928-ebd0-441e-9720-81e31ef81a3a' as unknown as v4String,
            firstName: 'Rémi',
            lastName: 'Castel',
            purchases: [],
        } as IUser,
        {
            id: 'e9637ce2-c4ed-43c0-b971-73b998663b23' as unknown as v4String,
            firstName: 'Alexis',
            lastName: 'Leroy',
            purchases: [],
        } as IUser,
    ];

    describe('GET /', () => {
        it('returns status code 200', (done) => {
            agent.get(baseUrl)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    done();
                });
        });

        it('controller should return a JSON object with all the users', (done) => {
            spyOn(UserService.prototype, 'getAll').and.returnValue(Promise.resolve(users));
            agent.get(baseUrl)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retUsers = res.body.users;
                    expect(retUsers).toEqual(users);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it('service should return a JSON object with all the users', (done) => {
            spyOn(UserDao.prototype, 'getAll').and.returnValue(Promise.resolve(users));
            agent.get(baseUrl)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retUsers = res.body.users;
                    expect(retUsers).toEqual(users);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe('GET /{id}', () => {
        it('returns status code 404', (done) => {
            agent.get(baseUrl + 'c498e2aa-1c42-4827-80be-9fc6edeeaee4')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(NOT_FOUND);
                    expect(res.body.error).toBeDefined();
                    done();
                });
        });

        it('controller should return a JSON object with the requested user', (done) => {
            spyOn(UserService.prototype, 'getById').and.returnValue(Promise.resolve(user));
            agent.get(baseUrl + 'c498e2aa-1c42-4827-80be-9fc6edeeaee3')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retUsers = res.body;
                    expect(retUsers).toEqual(user);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it('service should return a JSON object with the requested user', (done) => {
            spyOn(UserDao.prototype, 'getById').and.returnValue(Promise.resolve(user));
            agent.get(baseUrl + 'c498e2aa-1c42-4827-80be-9fc6edeeaee3')
                .end((err: Error, res: Response) => {
                    pErr(err);
                    const retUsers = res.body;
                    expect(retUsers).toEqual(user);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });
});
