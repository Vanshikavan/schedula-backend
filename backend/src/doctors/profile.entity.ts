import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  experience: number;

  @Column()
  consultationHours: string;

  @OneToOne(() => Doctor, (doctor) => doctor.profile)
  @JoinColumn()
  doctor: Doctor;
}
