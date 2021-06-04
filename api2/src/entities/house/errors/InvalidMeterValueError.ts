export class InvalidMeterValueError extends Error implements HouseError {
    constructor(value: number) {
        super(`The meter value "${value}" is not a valid value`)
        this.name = 'InvalidMeterValueError'
    }
}
