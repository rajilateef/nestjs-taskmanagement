import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './tasks/config/typeorm.config';
import Task from './entity/task.entity';
import { Connection } from 'typeorm';
import { TaskRepository } from './tasks/task.repository';


@Module({
  imports: [
   TypeOrmModule.forRoot({
     autoLoadEntities: true,
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: '',
     database: 'test',
     entities: [Task],
     synchronize: true,
   }),TasksModule, TaskRepository


  ],
  
})
export class AppModule {
  constructor(private connection: Connection) {}
}
