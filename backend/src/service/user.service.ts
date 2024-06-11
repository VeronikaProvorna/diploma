import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../model/user.schema';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(userDto: UserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(userDto);
    return await createdUser.save();
  }

  async findUserByName(username: string): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new NotFoundException('User is not found');
    }
    return user;
  }

  async findUserById(userId: string): Promise<UserDocument | undefined> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User is not found');
    }
    return user;
  }

  async deleteUser(userId: string): Promise<UserDocument> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }
}
