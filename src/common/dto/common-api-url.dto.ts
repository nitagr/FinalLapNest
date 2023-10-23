import { IsNotEmpty, IsString } from 'class-validator';

export class CommonApiUrlsDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  user: any;

  data: any;
}
