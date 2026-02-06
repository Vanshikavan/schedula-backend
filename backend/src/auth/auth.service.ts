import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserRole } from '../users/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async googleLogin(profile, role: UserRole) {

    const user =
      await this.usersService.findOrCreateGoogleUser(profile, role);

    const payload = {
      sub: user.id,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
