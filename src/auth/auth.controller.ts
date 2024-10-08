import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<string> {
    return this.authService.login({ email, password });
  }
}
