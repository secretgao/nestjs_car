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
exports.YearsOfProductionController = void 0;
const common_1 = require("@nestjs/common");
let YearsOfProductionController = class YearsOfProductionController {
    async getYearsOfProduction() {
        return {
            code: 200,
            data: [
                { title: 'Year', value: '' },
                { title: '2015', value: '2015' },
                { title: '2016', value: '2016' },
                { title: '2017', value: '2017' },
                { title: '2018', value: '2018' },
                { title: '2019', value: '2019' },
                { title: '2020', value: '2020' },
                { title: '2021', value: '2021' },
                { title: '2022', value: '2022' },
                { title: '2023', value: '2023' },
            ],
        };
    }
};
exports.YearsOfProductionController = YearsOfProductionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], YearsOfProductionController.prototype, "getYearsOfProduction", null);
exports.YearsOfProductionController = YearsOfProductionController = __decorate([
    (0, common_1.Controller)('years-of-production')
], YearsOfProductionController);
//# sourceMappingURL=years-of-production.controller.js.map