import { Injectable, UnauthorizedException } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt' 
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    @Inje
    constructor(private JwtService:JwtService, private UserService:UserService){}
    async signIn(email:string,pass: string): Promise<{access_token:string}>{
        const user =await this.UserService.findOne(email);

        if(user?.password!=pass){
            throw new UnauthorizedException('Please check your username or password')
        }
        const payload = { sub: user.userId, username: user.email };
        return {
            access_token: await this.JwtService.signAsync(payload)
        }

    }
             
}


