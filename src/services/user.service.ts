import {v4String} from 'uuid/interfaces';
import {IUser} from '@entities';
import {IUserDao} from '../daos/User/user.dao';
import {UserDao} from '@daos';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';

export interface IUserService {
    getAll: () => Promise<IUser[]>;
    getById: (id: v4String) => Promise<IUser | null>;
}

export class UserService implements IUserService {

    private userDao: IUserDao = new UserDao();

    @NameCallerArgsReturnLogServicesInfoLevel('User')
    public getAll(): Promise<IUser[]> {
        return this.userDao.getAll();
    }

    @NameCallerArgsReturnLogServicesInfoLevel('User')
    public getById(id: v4String): Promise<IUser | null> {
        return this.userDao.getById(id);
    }
}
