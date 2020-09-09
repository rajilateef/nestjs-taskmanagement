import Task  from '../entity/task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
  const {status, search} = filterDto;
  const query = this.createQueryBuilder('task');

  if(status){
  query.andWhere('task.status = :status', {status : 'OPEN'});
  }
  if(search){
 query.andWhere('(task.title LIKE :search OR task.description)', {search: `%${search}%`} );
  }
  const tasks = await query.getMany();
  return tasks;
}
}
