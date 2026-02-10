import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { User } from '../users/user.entity';
import { Profile } from './profile.entity';
import { VerificationToken } from './verification-token.entity';
import { Specialization } from './specialization.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepo: Repository<Doctor>,

    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(Profile)
    private profileRepo: Repository<Profile>,

    @InjectRepository(VerificationToken)
    private tokenRepo: Repository<VerificationToken>,

    @InjectRepository(Specialization)
    private specRepo: Repository<Specialization>,
  ) {}

  async register(userId: string) {
  const user = await this.userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new NotFoundException('User not found');
  }

  // update role to DOCTOR
  user.role = 'DOCTOR' as any;
  await this.userRepo.save(user);

  const doctor = this.doctorRepo.create({ user });

  return this.doctorRepo.save(doctor);
}


  async generateVerificationToken(doctorId: string) {
    const doctor = await this.doctorRepo.findOneBy({ id: doctorId });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const token = this.tokenRepo.create({
      token: randomUUID(),
      doctor,
    });

    return this.tokenRepo.save(token);
  }

  async verifyDoctor(token: string) {
    const record = await this.tokenRepo.findOne({
      where: { token },
      relations: ['doctor'],
    });

    if (!record) {
      throw new NotFoundException('Invalid token');
    }

    return {
      verified: true,
      doctorId: record.doctor.id,
    };
  }

  async updateProfile(
    doctorId: string,
    experience: number,
    consultationHours: string,
  ) {
    const doctor = await this.doctorRepo.findOneBy({ id: doctorId });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const profile = this.profileRepo.create({
      experience,
      consultationHours,
      doctor,
    });

    return this.profileRepo.save(profile);
  }

  async addSpecialization(doctorId: string, name: string) {
    const doctor = await this.doctorRepo.findOneBy({ id: doctorId });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const spec = this.specRepo.create({
      name,
      doctor,
    });

    return this.specRepo.save(spec);
  }
}
