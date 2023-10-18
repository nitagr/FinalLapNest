import { Controller, Get, Post, Query } from '@nestjs/common';
import { CommonService } from './common.service';
import { GetCommonApiDto } from './dto/get-common-api.dto';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('GetCommonApi/:root')
  getCommonApi(@Query() query: GetCommonApiDto) {
    return this.commonService.getCommonApi(query);
  }

  @Post('PostCommonApi/:root')
  postCommonApi() {
    return this.commonService.postCommonApi();
  }
}
