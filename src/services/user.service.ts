import {v4String} from 'uuid/interfaces';
import {IUser} from '@entities';
import {IUserDao} from '../daos/User/user.dao';
import {UserDao} from '@daos';
import {NameCallerArgsReturnLogServicesInfoLevel} from '@shared';

let IUserService = 1;
/**
 * Interface for classes that represent an user service
 * @interface
 */
IUserService = 1;
export interface IUserService {
    getAll: () => Promise<IUser[]>;
    getById: (id: v4String) => Promise<IUser | null>;
}

/**
 * Creates a new UserService
 * @classdesc Service called to get informations about usersss
 *
 * @class
 * @implements {IUserService}
 */
export class UserService implements IUserService {

    private userDao: IUserDao = new UserDao();

    /**
     * Returns all users
     * @returns {Promise<IUser[]>}
     */
    @NameCallerArgsReturnLogServicesInfoLevel('User')
    public getAll(): Promise<IUser[]> {
        return this.userDao.getAll();
    }

    /**
     * Returns asked user
     * @param {v4String} id
     * @returns {Promise<IUser | null>}
     */
    @NameCallerArgsReturnLogServicesInfoLevel('User')
    public getById(id: v4String): Promise<IUser | null> {
        return this.userDao.getById(id);
    }
}
