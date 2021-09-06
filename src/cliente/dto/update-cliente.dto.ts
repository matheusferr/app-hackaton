import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateClienteDto {
  @ApiProperty({ example: '12345678' })
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  telefone: string;
}
