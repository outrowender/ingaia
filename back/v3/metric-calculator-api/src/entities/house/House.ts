import { Either, left, right } from "../../shared/monads/either";
import { InvalidMeterValueError } from "./errors/InvalidMeterValueError";
import { InvalidSizeError } from "./errors/InvalidSizeError";

export class House {
    public readonly meters: number
    public readonly meterValue: number

    private constructor(props: Omit<House, 'totalValue'>) {
        Object.assign(this, props)
    }

    static create(meters: number, meterValue: number): Either<HouseError, House> {
        const result = this.validate(meters, meterValue)

        if (result !== true) return left(result as HouseError)

        return right(new House({ meters, meterValue }))
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