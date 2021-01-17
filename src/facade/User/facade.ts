import User from "../../models/user.model";
import { UserService } from "../../services";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let users = await UserService.findAll();
        return users;
    },
    async create(user: User): Promise<User> {
        let userSaved = await UserService.create(user);
        return userSaved;
    },

    async update(user: User, id: number): Promise<boolean> {
        return await UserService.update(user, id);
    },

    async destroy(id: number): Promise<boolean> {
        return await UserService.destroy(id);
    },

    async getById(id: number): Promise<User | null> {
        return await UserService.getById(id);
    }

}

export default UserFacade;