import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig:  TypeOrmModuleOptions = {
  type : 'postgres',
  host: 'localhost',
  port: 5000,
  username: 'postgres',
  password: '123ajiboy',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};