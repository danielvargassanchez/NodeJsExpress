import { IUserService } from "./interface";
import User from "../../models/user.model";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        return User.findAll();
    },
    /**
      * @returns {Promise < boolean >}
      * @memberof UserFacade
      */
    async create(user: User): Promise<User> {
        return await User.create(user);
    },
    /**
      * @returns {Promise < boolean >}
      * @memberof UserFacade
      */
    async update(user: User, id: number): Promise<boolean> {
        const existsUser = await User.findOne({ where: { id: id } });
        if (!existsUser) {
            return false;
        }
        existsUser.id = user.id;
        existsUser.name = user.name;
        await existsUser.save();
        return true;
    },
    /**
      * @returns {Promise < boolean >}
      * @memberof UserFacade
      */
    async destroy(id: number): Promise<boolean> {
        const existsUser = await User.findOne({ where: { id } });
        if (!existsUser) {
            return false;
        }
        await existsUser.destroy();
        return true;
    },
    async getById(id: number): Promise<User | null> {
        return await User.findOne({ where: { id } });
    }

}

export default UserService;