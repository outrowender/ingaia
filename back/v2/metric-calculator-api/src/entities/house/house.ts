import { Either, left, right } from "../../shared/either";
import { InvalidMeterValueError } from "./errors/invalid-meter-value-error";
import { InvalidSizeError } from "./errors/invalid-size-value-error";

export class House {
    public readonly meters: number
    public readonly meterValue: number

    private constructor(meters: number, squareMeterValue: number) {
        this.meters = meters;
        this.meterValue = squareMeterValue
        Object.freeze(this)
    }

    static create(meters: number, squareMeterValue: number): Either<HouseError, House> {
        const result = this.validate(meters, squareMeterValue)

        if (result !== true) return left(result as HouseError)

        return right(new House(meters, squareMeterValue))
    }

    static validate(meters: number, meterValue: number): boolean | HouseError {
        if (meters < 10 || meters > 10000) return new InvalidSizeError(meters);
        if (meterValue < 1) return new InvalidMeterValueError(meterValue);
        return true
    }

    get totalValue() {
        return this.meters * this.meterValue
    }

}