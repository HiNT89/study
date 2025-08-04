import { Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from '@/type/entities/type/type'; // Adjust the import path as necessary

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Type, (type) => type.tasks)
  type: Type;

  @Column()
  progress: string; // Using APP_CONFIG.PROGRESS_TASK to set this value

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean; // Indicates if the type is active
}
