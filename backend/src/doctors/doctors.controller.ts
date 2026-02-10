import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('/api/v1/doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  // Doctor registration (link user → doctor)
  @Post('register/:userId')
  register(@Param('userId') userId: string) {
    return this.doctorsService.register(userId);
  }

  // Generate verification token
  @Post('verification-token/:doctorId')
  generateToken(@Param('doctorId') doctorId: string) {
    return this.doctorsService.generateVerificationToken(doctorId);
  }

  // Verify doctor using token
  @Post('verify')
  verify(@Body('token') token: string) {
    return this.doctorsService.verifyDoctor(token);
  }

  // Setup / update doctor profile
  @Put('profile/:doctorId')
  updateProfile(
    @Param('doctorId') doctorId: string,
    @Body('experience') experience: number,
    @Body('consultationHours') consultationHours: string,
  ) {
    return this.doctorsService.updateProfile(
      doctorId,
      experience,
      consultationHours,
    );
  }

  // Add specialization
  @Post('specialization/:doctorId')
  addSpecialization(
    @Param('doctorId') doctorId: string,
    @Body('name') name: string,
  ) {
    return this.doctorsService.addSpecialization(doctorId, name);
  }
}
