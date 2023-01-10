import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAccountInput: CreateAccountInput) {
    return this.prisma.account.create({
      data: {
        email: createAccountInput.email,
        password: createAccountInput.password,
      },
    });
  }

  findAll() {
    return this.prisma.account.findMany();
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return this.prisma.account.update({
      where: { id },
      data: {
        email: updateAccountInput.email,
        password: updateAccountInput.password,
      },
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({
      where: { id },
    });
  }
}
