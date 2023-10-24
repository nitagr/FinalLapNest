import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AWS from 'aws-sdk';

@Injectable()
export class SqsService {
  private queueUrl: string;
  private awsRegion: string;
  constructor(private readonly configService: ConfigService) {
    this.queueUrl = this.configService.get<string>('AWS_SQS_LOGGING');
    this.awsRegion = this.configService.get<string>('AWS_REGION');
  }

  async SendSqs(data: any, url: string) {
    AWS.config.update({ region: this.awsRegion });
    const sqs = new AWS.SQS({ apiVersion: '2022-11-05' });

    const params = {
      MessageBody: JSON.stringify(data),
      QueueUrl: url,
    };
    const sendSqsMessage = sqs.sendMessage(params).promise();

    sendSqsMessage
      .then((data) => {
        // console.log('success', data);
        // console.log(`MessageId | SUCCESS: ${data.MessageId}`);
      })
      .catch((err) => {
        console.log(`SQS LOG | ERROR: ${err}`);
      });
  }

  async LogSqs(data: any) {
    this.SendSqs(data, this.queueUrl);
  }
}
