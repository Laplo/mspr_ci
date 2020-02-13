import supertest, {SuperTest, Test} from "supertest";
import app from "../../src/app";

describe('company total revenue', () =>{
    let user: SuperTest<Test>;

    beforeAll(( done )=> {
        user = supertest(app);
        done();
    });

    test('100 + 10 = 110', () =>{
        expect(purchase(100, 10)).toBe(110);
    });
});
const {userId, user, productId, product} = require('/src/daos/MockDb/MockDao.mock');
