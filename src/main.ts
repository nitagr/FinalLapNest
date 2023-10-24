import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
import { HttpExceptionFilter } from './Libs/filters/http-exception.filter';
import { SecretService } from './config/services/aws-secret.service';

async function bootstrap() {
  const httpService = new HttpService();

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  httpService.axiosRef.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error('Internal server error exception', error);
      throw new InternalServerErrorException();
    },
  );
  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT');
  await app.listen(port, () => {
    console.log('App started on Port', port);
  });

  // const secretService = new SecretService(configService);
  // const data = await secretService.getAwsSecretConfig();
  // console.log(data);
}
bootstrap();
