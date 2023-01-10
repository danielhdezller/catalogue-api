import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  //   async validateAccount(email: string, pass: string): Promise<any> {
  //     const account = await this.accountService.findOneByEmail(email);

  //     if(account && account.email ===)
  //   }

  async login(account: any) {
    const payload = { email: account.email, sub: account.accountId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
