import { Module } from '@nestjs/common';
import { SqldbService } from './sqldb.service';
import { SqldbController } from './sqldb.controller';
import { SqlModule } from 'src/shared/sql/sql.module';
import { SqlService } from 'src/shared/sql/sql.service';

@Module({
  imports: [SqlModule],
  controllers: [SqldbController],
  providers: [SqldbService, SqlService],
})
export class SqldbModule {}
