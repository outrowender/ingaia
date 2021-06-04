import { calculateHouseController, houseRepository } from "..";
import { IHttpRequest } from "../../../shared/interfaces/IHttp";

describe('CalculateHouseController', () => {
    const controller = calculateHouseController
    it('should return 200 when request is ok', async () => {

        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        const request: IHttpRequest = {
            body: {
                size: 20
            }
        }

        const result = await controller.handle(request)

        expect(result.statusCode).toBe(200)
    })
})