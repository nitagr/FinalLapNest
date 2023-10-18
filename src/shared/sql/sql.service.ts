import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sql from 'mssql';

@Injectable()
export class SqlService {
  private pool: sql.ConnectionPool;
  private config: sql.config;

  constructor(private readonly configService: ConfigService) {
    this.pool = new sql.ConnectionPool({
      user: this.configService.get<string>('SQL_USER'),
      password: this.configService.get<string>('SQL_PASSWORD'),
      server: this.configService.get<string>('SQL_HOST'),
      database: this.configService.get<string>('SQL_DATABASE'),
      stream: false,
      pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 60000,
      },
      options: {
        trustServerCertificate: true,
        enableArithAbort: true,
        encrypt: true,
      },
    });
  }

  async executeQuery(sqlQuery: string): Promise<any> {
    try {
      await this.pool.connect();
      const request = this.pool.request();
      const result = await request.query(sqlQuery);
      return result?.recordset || [];
    } catch (error) {
      console.log('sqlQuery', error);
      throw error;
    }
  }

  async executeStoredProcedure(
    procedureName: string,
    parameters: { name: string; value: any }[],
  ): Promise<any> {
    try {
      await this.pool.connect();
      const request = this.pool.request();
      parameters?.forEach((param) => {
        request.input(param.name, param.value);
      });

      const result = await request.execute(procedureName);
      return result?.recordset || [];
    } catch (error) {
      throw error;
    } finally {
      this.pool.close();
    }
  }
}
