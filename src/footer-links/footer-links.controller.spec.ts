import { Test, TestingModule } from '@nestjs/testing';
import { FooterLinksController } from './footer-links.controller';

describe('FooterLinksController', () => {
  let controller: FooterLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FooterLinksController],
    }).compile();

    controller = module.get<FooterLinksController>(FooterLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
