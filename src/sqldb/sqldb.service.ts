import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/shared/sql/sql.service';
import { StoredProcedureDto } from './dto/storedproc-sqldb.dto';

@Injectable()
export class SqldbService {
  constructor(private sqlService: SqlService) {}

  findAll(): Promise<any> {
    return this.sqlService.executeQuery(
      'Select top 1 * from [enc].[JAG_Agents]',
    );
  }

  findAllStored(requestBody: StoredProcedureDto): Promise<any> {
    const { name, params } = requestBody;
    return this.sqlService.executeStoredProcedure(name, params);
  }
}
