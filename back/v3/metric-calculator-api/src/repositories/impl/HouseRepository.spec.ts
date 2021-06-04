import axios from "axios"
import { HouseRepository } from "./HouseRepository"

describe('HouseRepository', () => {
    it('should return expected data when response is ok', async () => {
        const sut = new HouseRepository()

        jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: { meters: 5 } })
        const result = await sut.getSquareMeterValue()

        expect(result.meters).toBe(5)

    })

    it('should throw a error when is unavailable', async () => {
        const sut = new HouseRepository()

        jest.spyOn(axios, 'get').mockResolvedValue({ status: 400 })

        await expect(async () => {
            await sut.getSquareMeterValue()
        }).rejects.toThrow('Error getting value from api')
    })
})