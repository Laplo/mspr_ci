import {Container} from 'inversify';
import {interfaces, TYPE} from 'inversify-express-utils';
import {UserController} from '../controllers/user.controller';

const container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(UserController).inSingletonScope().whenTargetNamed(UserController.TARGET_NAME);

export default container;
