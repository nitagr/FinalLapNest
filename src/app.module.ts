import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqldbModule } from './sqldb/sqldb.module';
import { SqlModule } from './shared/sql/sql.module';
import { APP_FILTER, APP_PIPE, RouterModule } from '@nestjs/core';
import { AuthMiddleware } from './Libs/middlewares/auth.middleware';
import { CommonModule } from './common/common.module';
import { HttpExceptionFilter } from './Libs/filters/http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SqldbModule,
    SqlModule,
    RouterModule.register([
      {
        path: 'api/v2/',
        module: SqldbModule,
      },
      {
        path: 'api/v2',
        module: CommonModule,
      },
      // {
      //   path: 'api/v2/athena',
      //   module: SqldbModule,
      // },
    ]),
    CommonModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });

    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'api/athena', method: RequestMethod.ALL });
  }
}
