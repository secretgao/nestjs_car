import { Module } from '@nestjs/common';
import { YearsOfProductionController } from './years-of-production.controller';

@Module({
  controllers: [YearsOfProductionController],
})
export class YearsOfProductionModule {}
