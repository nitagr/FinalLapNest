import { Injectable } from '@nestjs/common';
import { GetCommonApiDto } from './dto/get-common-api.dto';
import { ApiHeaderUtils } from './utils/api-headers.utils';
import { ApiUrlUtils } from './utils/api-urls.utils';
import { DEFAULT_TIMEOUT } from './constants/common-api.constants';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CommonService {
  constructor(
    private readonly apiHeaderUtils: ApiHeaderUtils,
    private readonly apiUrlUtils: ApiUrlUtils,
    private readonly httpService: HttpService,
  ) {}

  async fetchDataWithTimeout(
    url: string,
    reqTimeout: number,
    headers: any,
  ): Promise<any> {
    const config = {
      headers: headers,
    };
    try {
      const response = await this.httpService.axiosRef.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCommonApi(userId: number, query: GetCommonApiDto) {
    const { type, data, timeout = DEFAULT_TIMEOUT } = query;
    const user = { userId };
    try {
      const headers = await this.apiHeaderUtils.getHeaders({
        type,
        data,
        user,
      });
      const url = await this.apiUrlUtils.getUrls({ type, data, user });
      const timeOut = Number(timeout);
      const result = await this.fetchDataWithTimeout(url, timeOut, headers);
      return { data: result };
    } catch (error) {
      return { error };
    }
  }

  // postCommonApi() {

  // }
}
