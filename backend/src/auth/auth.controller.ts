import { Controller, Get, Query, Req, UseGuards, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRole } from '../users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GooglePatientGuard } from './google-patient.guard';
import { GoogleDoctorGuard } from './google-doctor.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/patient')
  @UseGuards(GooglePatientGuard)
  async googlePatient() {}

  @Get('google/doctor')
  @UseGuards(GoogleDoctorGuard)
  async googleDoctor() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(
    @Req() req,
    @Query('state') state: UserRole,
  ) {
    return this.authService.googleLogin(req.user, state);
  }

  @Post('signup')
  async signup(@Body() body: any) {
    return {
      message: 'Signup endpoint (email / phone / Google) – placeholder',
      data: body,
    };
  }

  @Post('signin')
  async signin(@Body() body: any) {
    return {
      message: 'Signin endpoint – placeholder',
      data: body,
    };
  }

  @Post('signout')
  async signout() {
    return {
      message: 'Signout successful',
    };
  }
}