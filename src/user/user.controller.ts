import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userSercice: UserService) {}
  @Get()
  getUsers() {
    return this.userSercice.getUsers();
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: string) {
    return this.userSercice.getUser({ userId });
  }
}
