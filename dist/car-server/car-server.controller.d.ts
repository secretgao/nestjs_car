import { CarServerService } from './car-server.service';
export declare class CarServerController {
    private readonly CarServerService;
    constructor(CarServerService: CarServerService);
    getCar(query: any): Promise<any>;
}
