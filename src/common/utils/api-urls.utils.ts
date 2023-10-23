import { Injectable } from '@nestjs/common';
import {
  ADD_CALL_TO_QUEUE,
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
import { CommonApiUrlsDto } from '../dto/common-api-url.dto';

@Injectable()
export class ApiUrlUtils {
  constructor(private readonly configService: ConfigService) {}

  async getUrls(query: CommonApiUrlsDto) {
    let urls;
    const env = this.configService.get('NODE_ENV');

    if (env === 'qa') {
      const data = await import('../../config/apis/qa-apis-urls.config');
      urls = data;
    } else {
      const path = '../../config/apis/prod-apis-urls.config';
      const data = await import(path);
      urls = data;
    }

    const { type, user, data } = query;
    const { userId } = user;

    try {
      switch (type) {
        case GET_BMS_URL:
          const BookingId = data?.BookingID;
          return `${urls.CONFIG.MATRIX_CORE_URL}/api/LeadDetails/GetbmsLink/${BookingId}/${userId}/SalesView`;

        case AUTO_PAY_STATUS:
          return urls.AUTO_PAY_API;

        case BMS_VERIFICATION_STATUS:
          return `${urls.CONFIG.BMS_SERVICE_URL}api/Partner/InsertUpdateVerificationStatus`;

        case ADD_CALL_TO_QUEUE:
          return urls.CONFIG.ADD_LEAD_TO_PRIORITYQUEUE;

        case DOC_POINT_BMS_URL:
          return urls.CONFIG.BMS_DOC_POINT_API;

        case GET_VERIFICATION_CAMPAIGN:
          const LeadID = data?.BookingID;
          // return config.GET_VERIFICATION_CAMPAIGN + '?LeadID=' + LeadID+ '&TransferType=SALES_TO_VERIFICATION';
          return `${urls.CONFIG.GET_VERIFICATION_CAMPAIGN}?LeadID=${LeadID}&TransferType=SALES_TO_VERIFICATION`;

        case MY_BOOKINGS_BMS_API:
          return `${urls.CONFIG.BMS_SERVICE_URL}api/booking/GetBookingDetailsPrimary`;

        case PENDING_PF_LEAD:
          return (
            urls.CONFIG.BMS_SERVICE_URL + 'api/booking/GetProposalFormLeadList'
          );

        case PENDING_DOC_LEAD:
          return (
            urls.CONFIG.BMS_SERVICE_URL +
            'api/booking/GetPendingDocumentLeadList'
          );

        case GET_CJ_URL:
          const LeadId = data?.LeadId;
          const ProductId = data?.ProductID;
          const SupplierId = data?.SupplierId;
          return `${urls.CONFIG.MATRIXCOREAPI}/api/LeadDetails/GetCJUrl?LeadID=${LeadId}&ProductId=${ProductId}&SupplierId=${SupplierId}&Process='booking'`;

        default:
          return 'https://default';
      }
    } catch (err) {
      console.log('inside GetUrl', err);
      throw err;
    }
  }
}
