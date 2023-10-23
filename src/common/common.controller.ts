import { Controller, Get, Query, Req } from '@nestjs/common';
import { CommonService } from './common.service';
import { GetCommonApiDto } from './dto/get-common-api.dto';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('GetCommonApi/:root')
  getCommonApi(@Req() req, @Query() query: GetCommonApiDto) {
    const { userId } = req['user'] || {};
    return this.commonService.getCommonApi(userId, query);
  }

  // @Post('PostCommonApi/:root')
  // postCommonApi() {
  //   return this.commonService.postCommonApi();
  // }
}
