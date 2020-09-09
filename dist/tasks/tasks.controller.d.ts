import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: number): Promise<Task>;
}
