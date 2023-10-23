import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { ApiHeaderUtils } from './utils/api-headers.utils';
import { ApiUrlUtils } from './utils/api-urls.utils';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CommonController],
  providers: [CommonService, ApiHeaderUtils, ApiUrlUtils],
})
export class CommonModule {}
