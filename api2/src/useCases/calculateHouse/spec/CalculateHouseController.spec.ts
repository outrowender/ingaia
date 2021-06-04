import { calculateHouseController, houseRepository } from "..";
import { IHttpRequest } from "../../../shared/interfaces/IHttp";

describe('CalculateHouseController', () => {
    it('should return 200 when request is ok', async () => {
        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        const request: IHttpRequest = {
            body: {
                size: 25
            }
        }

        const result = await calculateHouseController.handle(request)

        expect(result.statusCode).toBe(200)
        expect(result.body).toEqual({ result: 250, meterValue: 10, size: 25 })
    })

    it('should return 422 when request body is a string', async () => {

        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        const request: IHttpRequest = {
            body: {
                size: 'invalid input'
            }
        }

        const result = await calculateHouseController.handle(request)

        expect(result.statusCode).toBe(422)
    })

    it('should return 422 when request body a invalid number', async () => {

        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        const request: IHttpRequest = {
            body: {
                size: 10001
            }
        }

        const result = await calculateHouseController.handle(request)

        expect(result.statusCode).toBe(422)
    })

    it('should return 422 when request body is not passed', async () => {

        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        const request: IHttpRequest = {
            body: null
        }

        const result = await calculateHouseController.handle(request)

        expect(result.statusCode).toBe(422)
    })

    it('should return 400 when body os ok but houseRepository is unavailable', async () => {

        jest.spyOn(houseRepository, 'getSquareMeterValue').mockRejectedValue(new Error('Error getting value from api'))

        const request: IHttpRequest = {
            body: {
                size: 20
            }
        }

        const result = await calculateHouseController.handle(request)

        expect(result.statusCode).toBe(400)
    })
})