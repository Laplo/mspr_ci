import {v4String} from 'uuid/interfaces';
import {IUser} from '@entities';
import {IUserDao} from '../daos/User/user.dao';
import {UserDao} from '@daos';

export interface IUserService {
    getAll: () => Promise<IUser[]>;
    getById: (id: v4String) => Promise<IUser | null>;
}

export class UserService implements IUserService {

    private userDao: IUserDao = new UserDao();

    public getAll(): Promise<IUser[]> {
        return this.userDao.getAll();
    }

    public getById(id: v4String): Promise<IUser | null> {
        return this.userDao.getById(id);
    }
}
