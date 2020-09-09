import { Delete, Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import Task from '../entity/task.entity';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id)
    if(!found){
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
return this.taskRepository.getTasks(filterDto);
}
  async getAll(): Promise<Task[]>{
    return await this.taskRepository.find();
  }


async delete(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if(result.affected === 0){
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async update(id: number, status: TaskStatus): Promise<Task> {
   const task = await this.getTaskById(id);
   task.Status = status;
   await task.save();
   return task;
  }


 //
 //
 async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
// return this.taskRepository.createTask(createTaskDto);
//
   const { title, description } = createTaskDto;

   const task = new Task();
   task.title = title;
   task.description = description;
   task.Status = TaskStatus.OPEN;
   await task.save();
   return task;
}
 //    const task: Task = {
 //        id: uuid(),
 //        title,
 //        description,
 //        status: TaskStatus.OPEN,
 //    };
 //    this.tasks.push(task);
 //    return task;
 //    }
}
