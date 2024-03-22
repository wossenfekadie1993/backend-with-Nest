import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt' 
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    UserService: any;
    constructor(private JwtService:JwtService, UserService:UserService){}
    async signIn(username:string,pass: string): Promise<{access_token:string}>{
        const user =await this.UserService.findOne(username);

        return ''

    }
             
}


