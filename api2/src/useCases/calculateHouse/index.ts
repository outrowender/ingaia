import { HouseRepository } from "../../repositories/impl/HouseRepository";
import { CalculateHouseController } from "./CalculateHouseController";
import { CalculateHouseUseCase } from "./CalculateHouseUseCase";

const houseRepository = new HouseRepository()

const calculateHouseUseCase = new CalculateHouseUseCase(houseRepository)
const calculateHouseController = new CalculateHouseController(calculateHouseUseCase)

export { houseRepository, calculateHouseUseCase, calculateHouseController }