import axios from "axios";
import { IHouseRepository } from "../IHouseRepository";
import { IMeterRequestDTO } from "../IHouseRepositoryDTOs";

const API1_HOST = process.env.API1_HOST

export class HouseRepository implements IHouseRepository {

    async getSquareMeterValue(): Promise<IMeterRequestDTO> {
        const result = await axios.get<IMeterRequestDTO>(`${API1_HOST}/api/square-meter`)

        if (result.status == 200)
            return result.data

        throw new Error("Error getting value from api");
    }

}