import { Injectable } from '@nestjs/common';
import { GetCommonApiDto } from './dto/get-common-api.dto';

@Injectable()
export class CommonService {
  getCommonApi(query: GetCommonApiDto) {
    const { type, data, timeout } = query;
  }
  
  postCommonApi() {
    
  }
}
