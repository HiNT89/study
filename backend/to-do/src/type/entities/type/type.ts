import { Entity, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Task } from '@/task/entities/task/task'; // Adjust the import path as necessary

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string; // Color associated with the type hex format

  @Column({ default: true })
  isActive: boolean; // Indicates if the type is active

  @OneToMany(() => Task, (task) => task.type)
  tasks: Task[];
}
