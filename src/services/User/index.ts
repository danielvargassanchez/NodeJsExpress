import User from '../../models/user.model';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
    return await UserService.findAll();
}
/**
 * @export
 * @returns {Promise < User >}
 */
export async function create(user: User): Promise<User> {
    return await UserService.create(user);
}
/**
 * @export
 * @returns {Promise <boolean>}
 */
export async function update(user: User, id: number): Promise<boolean> {
    return await UserService.update(user, id);
}

/**
 * @export
 * @returns {Promise < User >}
 */
export async function getById(id: number): Promise<User | null> {
    return await UserService.getById(id);
}
/**
 * @export
 * @returns {Promise < boplean >}
 */
export async function destroy(id: number): Promise<boolean> {
    return await UserService.destroy(id);
}