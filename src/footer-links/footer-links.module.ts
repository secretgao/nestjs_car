import { Module } from '@nestjs/common';
import { FooterLinksController } from './footer-links.controller';
@Module({
  controllers: [FooterLinksController],
})
export class FooterLinksModule {}
