import { AuthService } from './auth.service';
import { signUpDto } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpDto: signUpDto): Promise<{
        token: string;
    }>;
}
