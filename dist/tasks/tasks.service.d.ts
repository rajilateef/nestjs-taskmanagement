import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskById(id: number): Promise<Task>;
}
