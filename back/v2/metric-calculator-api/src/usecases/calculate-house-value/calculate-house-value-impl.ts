import { House } from "../../entities/house/house";
import { MeterRepository } from "../../external/interfaces/meter-repository";
import { Either, left, right } from "../../shared/either";
import { CalculateHouseValue } from "./calculate-house-value";
import { LoadMeterValueError } from "./errors/load-meter-value-error";

export class CalculateHouseValueImpl implements CalculateHouseValue {
    private readonly meterRepository: MeterRepository

    async call(size: number): Promise<Either<CalculateHouseError, number>> {
        let meterValue: number

        try {
            meterValue = await this.meterRepository.loadMeterValue()
        } catch (error) {
            return left(new LoadMeterValueError('Error loading meter value from api'))
        }

        const houseOrError = House.create(size, meterValue)

        if (houseOrError.isLeft()) return left(houseOrError.value)

        return right(houseOrError.value.totalValue)

    }

}