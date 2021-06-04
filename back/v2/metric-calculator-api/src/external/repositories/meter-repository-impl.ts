import { MeterRepository } from "../interfaces/meter-repository";

export class MeterRepositoryImpl implements MeterRepository {
    async loadMeterValue() {
        return 10;
    }

}