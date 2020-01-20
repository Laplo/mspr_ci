import {NameCallerArgsReturnLogDaosInfoLevel, SequelizeConnection} from '@shared';
import {IUser, User} from '@entities';

export interface IUserDao {
    getAll: () => Promise<IUser[]>;
}

export class UserDao implements IUserDao {
    private userRepository = SequelizeConnection.getInstance().getRepository(User);

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getAll(): Promise<IUser[]> {
        return this.userRepository.findAll();
    }
}
