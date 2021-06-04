export interface MeterRepository {
    loadMeterValue: () => Promise<number>
}