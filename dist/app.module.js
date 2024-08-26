"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const manufacturers_controller_1 = require("./manufacturers/manufacturers.controller");
const manufacturers_module_1 = require("./manufacturers/manufacturers.module");
const years_of_production_controller_1 = require("./years-of-production/years-of-production.controller");
const years_of_production_module_1 = require("./years-of-production/years-of-production.module");
const fuels_controller_1 = require("./fuels/fuels.controller");
const fuels_module_1 = require("./fuels/fuels.module");
const footer_links_controller_1 = require("./footer-links/footer-links.controller");
const footer_links_module_1 = require("./footer-links/footer-links.module");
const car_server_controller_1 = require("./car-server/car-server.controller");
const car_server_module_1 = require("./car-server/car-server.module");
const car_server_service_1 = require("./car-server/car-server.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            manufacturers_module_1.ManufacturersModule,
            years_of_production_module_1.YearsOfProductionModule,
            fuels_module_1.FuelsModule,
            footer_links_module_1.FooterLinksModule,
            car_server_module_1.CarServerModule,
        ],
        controllers: [
            app_controller_1.AppController,
            manufacturers_controller_1.ManufacturersController,
            years_of_production_controller_1.YearsOfProductionController,
            fuels_controller_1.FuelsController,
            footer_links_controller_1.FooterLinksController,
            car_server_controller_1.CarServerController,
        ],
        providers: [app_service_1.AppService, car_server_service_1.CarServerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map