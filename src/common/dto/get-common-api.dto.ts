import { IsString, IsNotEmpty } from 'class-validator';

export class GetCommonApiDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  data: any;

  timeout: number;
}
