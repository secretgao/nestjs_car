// src/manufacturers/manufacturers.module.ts
import { Module } from '@nestjs/common';
import { ManufacturersController } from './manufacturers.controller';

@Module({
  controllers: [ManufacturersController],
})
export class ManufacturersModule {}
