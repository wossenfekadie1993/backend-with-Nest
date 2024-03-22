import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt' 
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private JwtService:JwtService, UserService:UserService){}
}

async signIn(username:string,password: string)Promise<>{

    }
     
