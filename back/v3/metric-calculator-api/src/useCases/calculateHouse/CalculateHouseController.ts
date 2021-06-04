import { Request, Response } from "express";
import { CalculateHouseUseCase } from "./CalculateHouseUseCase";

export class CalculateHouseController {
    constructor(private useCase: CalculateHouseUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const valid = this.validate(request.body)
        if (!valid) return response.status(422).json({ message: 'Unexpected Error' })

        const { size } = request.body

        try {
            const result = await this.useCase.execute({ size })
            return response.status(200).send(result)

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }

    private validate(obj: object) {
        if (!obj['size']) return false //check value
        if (isNaN(obj['size'])) return false //check type
        if (obj['size'] < 10 || obj['size'] > 10000) return false //check range

        return true
    }
}