import { IsString, IsNotEmpty } from 'class-validator';

export class StoredProcedureDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  params: any[];
}
