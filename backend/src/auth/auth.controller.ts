import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRole } from '../users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GooglePatientGuard } from './google-patient.guard';
import { GoogleDoctorGuard } from './google-doctor.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/patient')
  @UseGuards(GooglePatientGuard)
  async googlePatient() {
    // redirect handled by passport
  }

  @Get('google/doctor')
  @UseGuards(GoogleDoctorGuard)
  async googleDoctor() {
    // redirect handled by passport
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(
    @Req() req,
    @Query('state') state: UserRole,
  ) {
    return this.authService.googleLogin(req.user, state);
  }
}
