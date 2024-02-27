import { Request, Response } from "express";
import GetTokenService from "./GetTokenService.js";
import User from "../../entity/User";

export default class GetTokenController{

    constructor(private getTokenService: GetTokenService){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password, grantType, clientId } = req.body;
        const user = new User(username, password, clientId, grantType);
        
        const token = await this.getTokenService.execute(user);
        
        return res.status(200).send(token);
    }
}