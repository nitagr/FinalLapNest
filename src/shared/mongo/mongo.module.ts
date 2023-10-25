import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION } from './enums/mongo.enum';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: DATABASE_CONNECTION.MATRIX_DASHBOARD,
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URL_MATRIXDASHBOARD');
        return { uri, useNewUrlParser: true, useUnifiedTopology: true };
      },
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: DATABASE_CONNECTION.ONE_LEAD,
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URL_MATRIXDASHBOARD');
        return { uri, useNewUrlParser: true, useUnifiedTopology: true };
      },
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}
