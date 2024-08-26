import { Module } from '@nestjs/common';
import { CarServerController } from './car-server.controller';
import { CarServerService } from './car-server.service';

@Module({
  controllers: [CarServerController],
  providers: [CarServerService],
})
export class CarServerModule {}
