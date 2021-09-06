import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString, IsEmail } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ example: 'lorem' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'lorem@ipsum.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  telefone: string;
}
