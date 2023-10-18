import { IsNotEmpty, IsString } from 'class-validator';

export class CommonApiHeaderDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  user: any;

  data: any;
}
