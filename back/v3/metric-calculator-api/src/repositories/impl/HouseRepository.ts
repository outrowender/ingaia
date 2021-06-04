import axios from "axios";
import { ICalculateHouseRequestDTO } from "../../useCases/calculateHouse/ICalculateHouseDTO";
import { IHouseRepository } from "../IHouseRepository";
import { IMeterRequestDTO } from "../IHouseRepositoryDTOs";

export class HouseRepository implements IHouseRepository {

    async getSquareMeterValue(): Promise<IMeterRequestDTO> {
        const result = await axios.get<IMeterRequestDTO>(`${'http://localhost:5000'}/api/square-meter`)

        if (result.status == 200)
            return result.data

        throw new Error("Error getting value from api");
    }

}