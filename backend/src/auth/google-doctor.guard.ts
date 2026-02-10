import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleDoctorGuard extends AuthGuard('google') {

  public getAuthenticateOptions(context: ExecutionContext) {
    return {
      state: 'DOCTOR',
    };
  }
}
