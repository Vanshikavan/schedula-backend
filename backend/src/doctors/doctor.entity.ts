import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Profile } from './profile.entity';
import { VerificationToken } from './verification-token.entity';
import { Specialization } from './specialization.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Profile, (profile) => profile.doctor)
  profile: Profile;

  @OneToMany(() => VerificationToken, (token) => token.doctor)
  verificationTokens: VerificationToken[];

  @OneToMany(() => Specialization, (spec) => spec.doctor)
  specializations: Specialization[];
}
