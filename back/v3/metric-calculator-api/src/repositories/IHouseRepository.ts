import { IMeterRequestDTO } from "./IHouseRepositoryDTOs";

export interface IHouseRepository {
    getSquareMeterValue(): Promise<IMeterRequestDTO>
}