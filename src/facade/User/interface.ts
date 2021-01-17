import User from "../../models/user.model";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    create(user: User): Promise<User>;

    /**
     * @returns {Promise<boolean>}
     * @memberof IUserFacade
     */
    update(user: User, id: number): Promise<boolean>;

    /**
     * @returns {Promise<boolean>}
     * @memberof IUserFacade
     */
    destroy(id: number): Promise<boolean>;


    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    getById(id: number): Promise<User | null>;
}