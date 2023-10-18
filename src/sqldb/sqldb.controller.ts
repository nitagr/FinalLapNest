import { Controller, Get, Post, Body } from '@nestjs/common';
import { SqldbService } from './sqldb.service';
import { StoredProcedureDto } from './dto/storedproc-sqldb.dto';

@Controller('db')
export class SqldbController {
  constructor(private readonly sqldbService: SqldbService) {}

  @Get()
  findAll(): Promise<any> {
    return this.sqldbService.findAll();
  }

  @Post('/listsp')
  findAllStored(@Body() requestBody: StoredProcedureDto): Promise<any> {
    return this.sqldbService.findAllStored(requestBody);
  }
}
