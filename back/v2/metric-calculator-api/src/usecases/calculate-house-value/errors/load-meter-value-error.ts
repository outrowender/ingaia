export class LoadMeterValueError extends Error implements CalculateHouseError {
    constructor(message: string) {
        super(message)
        this.name = 'LoadMeterValueError'
    }
}