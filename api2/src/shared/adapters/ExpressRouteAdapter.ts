import { Request, Response } from "express"
import { IController } from "../interfaces/IController"
import { IHttpRequest } from "../interfaces/IHttp"

export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: IHttpRequest = {
            body: req.body
        }
        const httpResponse = await controller.handle(httpRequest)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}
