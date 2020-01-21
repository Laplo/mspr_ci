import {Container} from 'inversify';
import {interfaces, TYPE} from 'inversify-express-utils';
import {UserController} from '../controllers/user.controller';
import {PurchaseController} from '../controllers/purchase.controller';
import {CompanyController} from '../controllers/company.controller';

const container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(UserController).inSingletonScope().whenTargetNamed(UserController.TARGET_NAME);
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(PurchaseController).inSingletonScope().whenTargetNamed(PurchaseController.TARGET_NAME);
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(CompanyController).inSingletonScope().whenTargetNamed(CompanyController.TARGET_NAME);

export default container;
