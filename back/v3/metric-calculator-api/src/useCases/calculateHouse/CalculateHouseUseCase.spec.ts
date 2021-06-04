import { calculateHouseUseCase, houseRepository } from "."

describe('CalculateHouseUseCase', () => {
    it('should return calculated value when input is ok', async () => {
        //arrange
        const request = { size: 10 }
        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        //act
        const val = await calculateHouseUseCase.execute(request)

        //assert
        expect(val).toEqual({
            result: 100,
            size: 10,
            meterValue: 10
        })
    })

    it('should throw an error when meter value is invalid (too low)', async () => {
        //arrange
        const request = { size: 10 }
        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 0 })

        //act & assert
        await expect(async () => {
            await calculateHouseUseCase.execute(request)
        }).rejects.toThrow('Error calculating values')
    })

    it('should throw an error when size is invalid (too low)', async () => {
        //arrange
        const request = { size: 0 }
        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        //act & assert
        await expect(async () => {
            await calculateHouseUseCase.execute(request)
        }).rejects.toThrow('Error calculating values')
    })

    it('should throw an error when size is invalid (too high)', async () => {
        //arrange
        const request = { size: 10001 }
        jest.spyOn(houseRepository, 'getSquareMeterValue').mockResolvedValue({ meters: 1, value: 10 })

        //act & assert
        await expect(async () => {
            await calculateHouseUseCase.execute(request)
        }).rejects.toThrow('Error calculating values')
    })
})