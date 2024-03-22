import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, private userService: UserService) {}

    async signIn(email: string, pass: string): Promise<{ access_token: string }> {
        if (!email || !pass) {
            throw new UnauthorizedException('Please provide both email and password');
        }

        const user = await this.userService.findOne(email);

        if (!user || user.password !== pass) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const payload = { sub: user.id, username: user.email };

        try {
            const access_token = await this.jwtService.signAsync(payload);
            return { access_token };
        } catch (error) {
            throw new UnauthorizedException('Unable to sign the JWT token');
        }
    }
}
