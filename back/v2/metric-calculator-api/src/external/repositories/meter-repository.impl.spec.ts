import { MeterRepositoryImpl } from "./meter-repository-impl"
import axios from 'axios';

describe('Meter repository', () => {

    it('should get meter value when is available', async () => {
        const sut = new MeterRepositoryImpl()

        jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: { meters: 5 } })
        const result = await sut.loadMeterValue()

        expect(result.meters).toBe(5)
    })

    it('should throw and error when is unavailable', async () => {
        const sut = new MeterRepositoryImpl()

        jest.spyOn(axios, 'get').mockResolvedValue({ status: 400 })

        await expect(async () => {
            await sut.loadMeterValue()
        }).rejects.toThrow('Error loading value from api')
    })
})