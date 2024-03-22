import { Injectable, UnauthorizedException } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt' 
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
   
    constructor(private jwtService:JwtService, private UserService:UserService){}
    async signIn(email:string,pass: string): Promise<{access_token:string}>{
        const user =await this.UserService.findOne(email);

        if (!email || !pass) {
            throw new UnauthorizedException('Please provide both email and password');
        }

        if(user?.password!=pass){
            throw new UnauthorizedException('Please check your username or password')
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


