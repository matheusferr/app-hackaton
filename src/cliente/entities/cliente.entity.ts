import { Column, Table } from 'sequelize-typescript';

@Table
export class Cliente {
  @Column
  id: number;
}
