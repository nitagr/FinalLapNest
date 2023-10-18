import { Module } from '@nestjs/common';
import { SqlService } from './sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mssql',
          host: configService.get<string>('SQL_HOST'),
          port: parseInt(configService.get<string>('SQL_PORT')),
          username: configService.get<string>('SQL_USER'),
          password: configService.get<string>('SQL_PASSWORD'),
          database: configService.get<string>('SQL_DATABASE'),
          // entities: ['dist/entities/mssql_Woods/*.js'],
          extra: {
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
          },
        };
      },

      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [SqlService],
})
export class SqlModule {}
