import { left } from "../../shared/monads/either"
import { InvalidMeterValueError } from "./errors/InvalidMeterValueError"
import { InvalidSizeError } from "./errors/InvalidSizeError"
import { House } from "./House"

describe('House entity', () => {
    it('should return a valid House instance when values are valid', () => {
        const size = 10
        const meterValue = 10

        const houseOrError = House.create(size, meterValue)

        expect(houseOrError.isRight()).toBeTruthy()
    })

    it('should return valid totalValue when values are valid', () => {
        const size = 1001
        const meterValue = 10

        const houseOrError = House.create(size, meterValue)
        const house = houseOrError.value as House

        expect(house.totalValue).toBe(10010)
    })

    it('should be invalid when meter value is zero', () => {
        const size = 10
        const meterValue = 0

        const houseOrError = House.create(size, meterValue)
        const house = houseOrError.value as HouseError

        expect(houseOrError.isLeft()).toBeTruthy()
        expect(houseOrError).toEqual(left(new InvalidMeterValueError(meterValue)))
        expect(house.message).toBe('The meter value "0" is not a valid value')
    })

    it('should be invalid when size is too high (over 10000)', () => {
        const size = 10001
        const meterValue = 10

        const houseOrError = House.create(size, meterValue)
        const house = houseOrError.value as HouseError

        expect(houseOrError.isLeft()).toBeTruthy()
        expect(houseOrError).toEqual(left(new InvalidSizeError(size)))
        expect(house.message).toBe('The size "10001" is not a valid value')
    })

    it('should be invalid when size is too low (above 1)', () => {
        const size = 0
        const meterValue = 10

        const houseOrError = House.create(size, meterValue)
        const house = houseOrError.value as HouseError

        expect(houseOrError.isLeft()).toBeTruthy()
        expect(houseOrError).toEqual(left(new InvalidSizeError(size)))
        expect(house.message).toBe('The size "0" is not a valid value')
    })
})