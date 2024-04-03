import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt'; // Assuming password hashing is implemented

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UserService) {}

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    try {
      if (!email || !password) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const user = await this.userService.findOne(email);

      if (!user || !compareSync(password, user.password)) { 
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload = { sub: user.id, username: user.email };
      const access_token = await this.jwtService.signAsync(payload);
      
      return { access_token };
    } catch (error) {
      throw new UnauthorizedException('Unable to sign in');
    }
  }
}
