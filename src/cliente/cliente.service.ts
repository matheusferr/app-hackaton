import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente)
    private clienteModel: typeof Cliente,
  ) {}

  findAll() {
    return this.clienteModel.findAll();
  }

  findById(id: number) {
    return this.clienteModel.findByPk(1, { rejectOnEmpty: true });
  }

  findByNome(nome: string) {
    return this.clienteModel.findOne({
      where: {
        nome,
      },
      rejectOnEmpty: true,
    });
  }

  create(createClienteDto: CreateClienteDto) {
    return this.clienteModel.create(createClienteDto);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const clienteExistente = await this.clienteModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    clienteExistente.telefone = updateClienteDto.telefone;

    await clienteExistente.save();

    return clienteExistente;
  }

  async remove(id: number) {
    await this.clienteModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    this.clienteModel.destroy({
      where: {
        id,
      },
    });
  }
}
