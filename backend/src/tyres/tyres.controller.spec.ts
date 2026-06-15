import { Test, TestingModule } from '@nestjs/testing';
import { TyresController } from './tyres.controller';

describe('TyresController', () => {
  let controller: TyresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TyresController],
    }).compile();

    controller = module.get<TyresController>(TyresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
