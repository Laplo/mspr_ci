import {v4String} from 'uuid/interfaces';
import {NameCallerArgsReturnLogDaosInfoLevel, SequelizeConnection} from '@shared';
import {IPurchase, Product, Purchase, User} from '@entities';

export interface IPurchaseDao {
    getAll: () => Promise<IPurchase[]>;
    getByUserId: (userId: v4String) => Promise<IPurchase[]>;
}

export class PurchaseDao implements IPurchaseDao {
    private purchaseRepository = SequelizeConnection.getInstance().getRepository(Purchase);
    private userRepository = SequelizeConnection.getInstance().getRepository(User);
    private productRepository = SequelizeConnection.getInstance().getRepository(Product);

    @NameCallerArgsReturnLogDaosInfoLevel('Purchase')
    public async getAll(): Promise<IPurchase[]> {
        return this.purchaseRepository.findAll({
            include: [
                this.productRepository,
            ],
        });
    }

    /**
     * @param userId
     */
    @NameCallerArgsReturnLogDaosInfoLevel('Purchase')
    public async getByUserId(userId: v4String): Promise<IPurchase[]> {
        return this.purchaseRepository.findAll({
            where: {
                userId: userId.toString(),
            },
            include: [
                this.userRepository,
                this.productRepository,
            ],
        });
    }
}
