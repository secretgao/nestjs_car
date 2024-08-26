import { Module } from '@nestjs/common';
import { FuelsController } from './fuels.controller';
@Module({
  controllers: [FuelsController],
})
export class FuelsModule {}
