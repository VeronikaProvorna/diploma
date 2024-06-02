import { JwtService } from '@nestjs/jwt';
import { UserService } from '../service/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(username: string): Promise<{
        accessToken: string;
    }>;
}
