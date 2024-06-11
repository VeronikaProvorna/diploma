import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userService.findUserByName(username);
  }

  @Post('/register')
  async createUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
