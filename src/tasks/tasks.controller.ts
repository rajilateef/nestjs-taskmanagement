import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    Query,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import Task  from '../entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    //
    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
      return this.tasksService.getTasks(filterDto);


    }
    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
    return this.tasksService.getTaskById(id);
    }
    //
    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() createTaskDto: CreateTaskDto
    ): Promise<Task>{
        return this.tasksService.createTask(createTaskDto);
    }

    @Get()
    async getAll(){
        return this.tasksService.getAll();
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number ): Promise<void> {
        return this.tasksService.delete(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
      @Param('id', ParseIntPipe) id: number,
      @Body('status', TaskStatusValidationPipe) status: TaskStatus): Promise<Task>{
        return this.tasksService.update(id, status);
    }
}
