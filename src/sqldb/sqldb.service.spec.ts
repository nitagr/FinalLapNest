import { Test, TestingModule } from '@nestjs/testing';
import { SqldbService } from './sqldb.service';

describe('SqldbService', () => {
  let service: SqldbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqldbService],
    }).compile();

    service = module.get<SqldbService>(SqldbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
