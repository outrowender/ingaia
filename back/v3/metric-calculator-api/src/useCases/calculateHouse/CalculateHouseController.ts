import { badRequest, ok, unprocessableEntity } from "../../shared/helpers/HttpHelpers";
import { IController } from "../../shared/interfaces/IController";
import { IHttpRequest, IHttpResponse } from "../../shared/interfaces/IHttp";
import { CalculateHouseUseCase } from "./CalculateHouseUseCase";

export class CalculateHouseController implements IController {
    constructor(private useCase: CalculateHouseUseCase) { }

    async handle(request: IHttpRequest): Promise<IHttpResponse> {

        const valid = this.validate(request.body)
        if (!valid) return unprocessableEntity(new Error('Size is invalid'))
        const { size } = request.body

        try {
            const result = await this.useCase.execute({ size })
            return ok(result)

        } catch (error) {
            return badRequest(new Error(error.message || 'Unexpected Error'))
        }

    }

    private validate(obj: object) {
        if (!obj['size']) return false //check value
        if (isNaN(obj['size'])) return false //check type
        if (obj['size'] < 10 || obj['size'] > 10000) return false //check range

        return true
    }
}