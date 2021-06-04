import { MeterRepository } from "../interfaces/meter-repository";
import { Meter } from "../interfaces/meter";
import axios from 'axios';
import environment from '../../../environments/environment'
import { LoadMeterValueError } from "../../usecases/calculate-house-value/errors/load-meter-value-error";

export class MeterRepositoryImpl implements MeterRepository {
    async loadMeterValue() {

        const result = await axios.get<Meter>(`${environment.METER_API}/api/square-meter`)

        if (result.status == 200)
            return result.data
        else
            throw new LoadMeterValueError('Error loading value from api');
    }

}