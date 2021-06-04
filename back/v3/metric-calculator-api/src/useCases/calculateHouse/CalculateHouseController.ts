import { Request, Response } from "express";
import { CalculateHouseUseCase } from "./CalculateHouseUseCase";

export class CalculateHouseController {
    constructor(private useCase: CalculateHouseUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {

        const { size } = request.body

        try {
            const result = await this.useCase.execute({ size })
            return response.status(200).send(result)
        } catch (error) {
            response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}