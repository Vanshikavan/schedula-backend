import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async findOrCreateGoogleUser(profile, role: UserRole) {

    let user = await this.repo.findOne({
      where: { email: profile.email },
    });

    if (!user) {
      user = this.repo.create({
        email: profile.email,
        name: profile.name,
        provider: 'google',
        providerId: profile.providerId,
        role,
      });

      await this.repo.save(user);
    }

    return user;
  }
}
