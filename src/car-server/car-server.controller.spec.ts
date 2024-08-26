import { Test, TestingModule } from '@nestjs/testing';
import { CarServerController } from './car-server.controller';

describe('CarServerController', () => {
  let controller: CarServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarServerController],
    }).compile();

    controller = module.get<CarServerController>(CarServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
