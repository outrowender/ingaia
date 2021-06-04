import { Either } from "../../shared/either";

export interface CalculateHouseValue {
    call: (size: number) => Promise<Either<CalculateHouseError, number>>
}
