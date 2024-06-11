import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(username: string): Promise<import("../model/user.schema").UserDocument>;
    createUser(userDto: UserDto): Promise<import("../model/user.schema").UserDocument>;
    deleteUser(id: string): Promise<import("../model/user.schema").UserDocument>;
}
