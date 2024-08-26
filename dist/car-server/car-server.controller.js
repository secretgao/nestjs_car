"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarServerController = void 0;
const common_1 = require("@nestjs/common");
const car_server_service_1 = require("./car-server.service");
let CarServerController = class CarServerController {
    constructor(CarServerService) {
        this.CarServerService = CarServerService;
    }
    async getCar(query) {
        const { manufacturer = '', year = 2022, model = '', limit = 10, fuel = '', } = query;
        try {
            const fuels = await this.CarServerService.fetchCars({
                manufacturer,
                year,
                model,
                limit,
                fuel,
            });
            return {
                code: 200,
                data: [
                    ...fuels,
                ],
            };
        }
        catch (error) {
            console.error(error);
            return {
                code: 500,
                message: 'Error fetching fuels',
            };
        }
    }
};
exports.CarServerController = CarServerController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarServerController.prototype, "getCar", null);
exports.CarServerController = CarServerController = __decorate([
    (0, common_1.Controller)('CarServer'),
    __metadata("design:paramtypes", [car_server_service_1.CarServerService])
], CarServerController);
//# sourceMappingURL=car-server.controller.js.map