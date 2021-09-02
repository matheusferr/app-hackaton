import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: ':memory:',
      autoLoadModels: true,
    }),
    ClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
