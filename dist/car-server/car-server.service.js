"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarServerService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let CarServerService = class CarServerService {
    constructor() {
        this.rapidApiKey = 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA';
    }
    async fetchCars(filters) {
        const { manufacturer, year, model, limit, fuel } = filters;
        const headers = {
            'X-RapidAPI-Key': this.rapidApiKey,
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
        };
        const response = await (0, node_fetch_1.default)(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers });
        if (!response.ok) {
            throw new Error(`Failed to fetch fuels: ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
};
exports.CarServerService = CarServerService;
exports.CarServerService = CarServerService = __decorate([
    (0, common_1.Injectable)()
], CarServerService);
//# sourceMappingURL=car-server.service.js.map