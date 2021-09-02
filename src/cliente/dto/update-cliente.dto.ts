import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateClienteDto {
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  telefone: string;
}
