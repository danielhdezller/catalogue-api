import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/account.service';

@Controller('auth')
export class AuthController {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateAccount(): Promise<any> {
    // const account
  }
}
