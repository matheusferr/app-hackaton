import { Model } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  BeforeSave,
  Column,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Cliente extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  nome: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  telefone: string;
}
