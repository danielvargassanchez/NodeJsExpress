import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import User from '../../models/user.model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users: any[] = await UserFacade.findAll();
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const userCreated: User = await UserFacade.create(req.body);
        res.status(HttpStatusCode.OK).json(userCreated);
    } catch (error) {
        next(error);
    }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log("update");
        console.log(req.params.id);
        const saved: boolean = await UserFacade.update(req.body, parseInt(req.params.id));
        res.status(HttpStatusCode.OK).json(saved);
    } catch (error) {
        next(error);
    }
}
export async function destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log("destroy");
        console.log(req.params.id);
        const destroyed: boolean = await UserFacade.destroy(parseInt(req.params.id));
        res.status(HttpStatusCode.OK).json(destroyed);
    } catch (error) {
        next(error);
    }
}

export async function getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log("by id");
        console.log(req.params.id);
        const user: User | null = await UserFacade.getById(parseInt(req.params.id));
        res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
        next(error);
    }
}