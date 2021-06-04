export class InvalidSizeError extends Error implements HouseError {
    constructor(size: number) {
        super(`The size "${size}" is not a valid value`)
        this.name = 'InvalidSizeError'
    }
}
