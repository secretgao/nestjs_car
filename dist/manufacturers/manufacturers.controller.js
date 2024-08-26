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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturersController = void 0;
const common_1 = require("@nestjs/common");
let ManufacturersController = class ManufacturersController {
    async getManufacturers() {
        return {
            code: 200,
            data: [
                'Acura',
                'Alfa Romeo',
                'Aston Martin',
                'Audi',
                'Bentley',
                'BMW',
                'Buick',
                'Cadillac',
                'Chevrolet',
                'Chrysler',
                'Citroen',
                'Dodge',
                'Ferrari',
                'Fiat',
                'Ford',
                'GMC',
                'Honda',
                'Hyundai',
                'Infiniti',
                'Jaguar',
                'Jeep',
                'Kia',
                'Lamborghini',
                'Land Rover',
                'Lexus',
                'Lincoln',
                'Maserati',
                'Mazda',
                'McLaren',
                'Mercedes-Benz',
                'MINI',
                'Mitsubishi',
                'Nissan',
                'Porsche',
                'Ram',
                'Rolls-Royce',
                'Subaru',
                'Tesla',
                'Toyota',
                'Volkswagen',
                'Volvo',
            ],
        };
    }
};
exports.ManufacturersController = ManufacturersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "getManufacturers", null);
exports.ManufacturersController = ManufacturersController = __decorate([
    (0, common_1.Controller)('manufacturers')
], ManufacturersController);
//# sourceMappingURL=manufacturers.controller.js.map