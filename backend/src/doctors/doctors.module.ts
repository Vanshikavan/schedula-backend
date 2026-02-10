import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { Profile } from './profile.entity';
import { VerificationToken } from './verification-token.entity';
import { Specialization } from './specialization.entity';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Doctor,
      Profile,
      VerificationToken,
      Specialization,
      User,
    ]),
  ],
  providers: [DoctorsService],
  controllers: [DoctorsController],
})
export class DoctorsModule {}
