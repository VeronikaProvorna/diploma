import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUserByName(username);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch: boolean = password == user.password;
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  async login(username: string) {
    const { _id } = await this.userService.findUserByName(username);

    const payload = {
      username,
      _id,
    };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
