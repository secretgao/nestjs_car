import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManufacturersController } from './manufacturers/manufacturers.controller';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { YearsOfProductionController } from './years-of-production/years-of-production.controller';
import { YearsOfProductionModule } from './years-of-production/years-of-production.module';
import { FuelsController } from './fuels/fuels.controller';
import { FuelsModule } from './fuels/fuels.module';
import { FooterLinksController } from './footer-links/footer-links.controller';
import { FooterLinksModule } from './footer-links/footer-links.module';
import { CarServerController } from './car-server/car-server.controller';
import { CarServerModule } from './car-server/car-server.module';
import { CarServerService } from './car-server/car-server.service';
@Module({
  imports: [
    ManufacturersModule,
    YearsOfProductionModule,
    FuelsModule,
    FooterLinksModule,
    CarServerModule,
  ],
  controllers: [
    AppController,
    ManufacturersController,
    YearsOfProductionController,
    FuelsController,
    FooterLinksController,
    CarServerController,
  ],
  providers: [AppService, CarServerService],
})
export class AppModule {}
