import { Meter } from "./meter";

export interface MeterRepository {
    loadMeterValue: () => Promise<Meter>
}