import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('Clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @ApiOkResponse({ description: 'Registro de todos os clientes' })
  @ApiInternalServerErrorResponse({
    description: 'Erro ao conectar ao banco de dados',
  })
  @Get('/')
  findAll() {
    return this.clienteService.findAll();
  }

  @ApiOkResponse({ description: 'Registro de um cliente' })
  @ApiNotFoundResponse({ description: 'Cliente não encontrado' })
  @ApiInternalServerErrorResponse({
    description: 'Erro ao conectar ao banco de dados',
  })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.findById(id);
  }

  @ApiCreatedResponse({ description: 'Registro de um cliente' })
  @ApiBadRequestResponse({ description: 'Erro no formato do body' })
  @ApiInternalServerErrorResponse({
    description: 'Erro ao conectar ao banco de dados, Email não único',
  })
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @ApiOkResponse({ description: 'Registro atualizado de um cliente' })
  @ApiBadRequestResponse({ description: 'Erro no formato do body' })
  @ApiNotFoundResponse({ description: 'Cliente não encontrado' })
  @ApiInternalServerErrorResponse({
    description: 'Erro ao conectar ao banco de dados',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @ApiNoContentResponse({ description: 'Cliente removido' })
  @ApiNotFoundResponse({ description: 'Cliente não encontrado' })
  @ApiInternalServerErrorResponse({
    description: 'Erro ao conectar ao banco de dados',
  })
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
