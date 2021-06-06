import { House } from "../../entities/house/House";
import { IHouseRepository } from "../../repositories/IHouseRepository";
import { ICalculateHouseRequestDTO, ICalculateHouseResponseDTO } from "./ICalculateHouseDTO";

export class CalculateHouseUseCase {
    constructor(private houseRepository: IHouseRepository) { }

    async execute(data: ICalculateHouseRequestDTO): Promise<ICalculateHouseResponseDTO> {

        const meters = await this.houseRepository.getSquareMeterValue()

        if (!meters) throw new Error('Error getting meter value')

        const houseOrError = House.create(data.size, meters.value)

        if (houseOrError.isRight()) {
            const house = houseOrError.value as House
            return {
                meterValue: meters.value,
                size: data.size,
                result: house.totalValue
            }
        } else
            throw new Error('Error calculating values')// TODO: better custom errors can be used here

    }
}