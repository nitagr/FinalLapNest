import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SecretsManager } from 'aws-sdk';
import { GetSecretValueResponse } from 'aws-sdk/clients/secretsmanager';

@Injectable()
export class SecretService {
  private secretsManager: SecretsManager;

  constructor(private readonly configService: ConfigService) {
    this.secretsManager = new SecretsManager({
      region: this.configService.get('AWS_REGION') || 'ap-south-1',
    });
  }

  async getAwsSecretConfig(): Promise<any> {
    try {
      const { SecretString }: GetSecretValueResponse = await this.secretsManager
        .getSecretValue({ SecretId: '' })
        .promise();

      const secret = JSON.parse(SecretString);
      return secret;
    } catch (error) {
      throw error;
    }
  }
}
