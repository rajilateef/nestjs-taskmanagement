import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../tasks/task-status.enum';
 
@Entity()
export default class Task extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  Status: TaskStatus;
}