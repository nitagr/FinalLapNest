import { Test, TestingModule } from '@nestjs/testing';
import { SqldbController } from './sqldb.controller';
import { SqldbService } from './sqldb.service';

describe('SqldbController', () => {
  let controller: SqldbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqldbController],
      providers: [SqldbService],
    }).compile();

    controller = module.get<SqldbController>(SqldbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
