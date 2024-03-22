import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt' 
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    
    constructor(private JwtService:JwtService, private UserService:UserService){}
    async signIn(username:string,pass: string): Promise<{access_token:string}>{
        const user =await this.UserService.findOne(username);

        if(user?.password==pass)

    }
             
}


