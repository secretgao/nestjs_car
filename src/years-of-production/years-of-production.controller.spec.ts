import { Test, TestingModule } from '@nestjs/testing';
import { YearsOfProductionController } from './years-of-production.controller';

describe('YearsOfProductionController', () => {
  let controller: YearsOfProductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearsOfProductionController],
    }).compile();

    controller = module.get<YearsOfProductionController>(YearsOfProductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
