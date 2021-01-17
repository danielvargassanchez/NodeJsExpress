import User from "../../models/user.model";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<boolean>}
     * @memberof IUserService
     */
    create(User: User): Promise<User>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    update(User: User, id: number): Promise<boolean>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    destroy(id: number): Promise<boolean>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    getById(id: number): Promise<User | null>;



}