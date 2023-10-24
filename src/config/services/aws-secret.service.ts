import { Injectable } from '@nestjs/common';
import { SecretsManager } from 'aws-sdk';
import { GetSecretValueResponse } from 'aws-sdk/clients/secretsmanager';

@Injectable()
export class SecretService {
  private secretsManager: SecretsManager;
  constructor() {
    this.secretsManager = new SecretsManager();
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
