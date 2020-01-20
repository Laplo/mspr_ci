import {v4String} from 'uuid/interfaces';
import {IUser} from '@entities';
import {IUserDao} from '../daos/User/user.dao';
import {UserDao} from '@daos';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';

export interface IUserService {
    getAll: () => Promise<IUser[]>;
}

export class UserService implements IUserService {

    private userDao: IUserDao = new UserDao();

    @NameCallerArgsReturnLogServicesInfoLevel('User')
    public getAll(): Promise<IUser[]> {
        return this.userDao.getAll();
    }
}
