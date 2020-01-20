const usingMockDb = (process.env.USE_MOCK_DB || '').toLowerCase();
let userDaoPath = './User/user.dao';
let purchaseDaoPath = './Purchase/purchase.dao';

if (usingMockDb === 'true') {
    userDaoPath += '.mock';
    purchaseDaoPath += '.mock';
}

// tslint:disable:no-var-requires
export const { UserDao } = require(userDaoPath);
export const { PurchaseDao } = require(purchaseDaoPath);
