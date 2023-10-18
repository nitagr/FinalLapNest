import { Injectable } from '@nestjs/common';
import { CommonApiHeaderDto } from '../dto/common-api-header.dto';
import {
  AUTO_PAY_STATUS,
  BMS_VERIFICATION_STATUS,
  DOC_POINT_BMS_URL,
  GET_BMS_URL,
  GET_CJ_URL,
  GET_VERIFICATION_CAMPAIGN,
  MY_BOOKINGS_BMS_API,
  PENDING_DOC_LEAD,
  PENDING_PF_LEAD,
} from '../constants/common-api.constants';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiHeaderUtils {
  constructor(private readonly configService: ConfigService) {}

  async getHeaders(query: CommonApiHeaderDto) {
    let config;
    const env = this.configService.get('NODE_ENV');

    if (env === 'qa') {
      const data = await import('../../config/apis/qa-apis-urls.config');
      config = data;
    } else {
      const path = '../../config/apis/prod-apis-urls.config';
      const data = await import(path);
      config = data;
    }
    
    const { type, user } = query;
    const { userId, token } = user;

    try {
      switch (type) {
        case GET_BMS_URL:
          return {
            AgentId: userId,
            Source: 'Matrix',
            'Content-Type': 'application/json',
            token: token,
          };
        case GET_VERIFICATION_CAMPAIGN:
          return {
            AgentId: userId,
            Source: 'Matrix',
            'Content-Type': 'application/json',
            token: token,
          };
        case AUTO_PAY_STATUS:
          return {
            auth: config.AUTO_PAY_AUTH,
            mid: config.AUTO_PAY_MID,
          };
        case BMS_VERIFICATION_STATUS:
          return {
            AppId: config.BMS_BOOKINGS_APP_ID,
            AppKey: config.BMS_BOOKINGS_APP_KEY,
            'Content-Type': 'application/json-patch+json',
          };
        case DOC_POINT_BMS_URL:
          return {
            Authorization: config.BMS_DOC_POINT_AUTH_HEADER,
            'Content-Type': 'application/json-patch+json',
          };
        case MY_BOOKINGS_BMS_API:
          return {
            AppId: config.BMS_BOOKINGS_APP_ID,
            AppKey: config.BMS_BOOKINGS_APP_KEY,
            'Content-Type': 'application/json',
          };

        case PENDING_PF_LEAD:
          return {
            AppId: config.BMS_BOOKINGS_APP_ID,
            AppKey: config.BMS_BOOKINGS_APP_KEY,
            'Content-Type': 'application/json-patch+json',
          };
        case PENDING_DOC_LEAD:
          return {
            AppId: config.BMS_BOOKINGS_APP_ID,
            AppKey: config.BMS_BOOKINGS_APP_KEY,
            'Content-Type': 'application/json-patch+json',
          };
        case GET_CJ_URL:
          return {
            clientKey: 'L6YWNav',
            Source: 'matrix',
            'Content-Type': 'application/json',
            authKey: 'LGsaWLYmF6YWNav',
          };
        default:
          return {
            'Content-Type': 'application/json',
          };
      }
    } catch (error) {
      throw error;
    }
  }
}
