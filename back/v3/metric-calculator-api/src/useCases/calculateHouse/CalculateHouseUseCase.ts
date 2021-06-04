import { IHouseRepository } from "../../repositories/IHouseRepository";
import { ICalculateHouseRequestDTO, ICalculateHouseResponseDTO } from "./ICalculateHouseDTO";

export class CalculateHouseUseCase {
    constructor(private houseRepository: IHouseRepository) { }

    async execute(data: ICalculateHouseRequestDTO): Promise<ICalculateHouseResponseDTO> {

        const values = await this.houseRepository.getSquareMeterValue()

        if (!values) throw new Error('Error getting meter value')

        return {
            meterValue: values.value,
            size: data.size,
            result: values.value * data.size
        }
    }
}