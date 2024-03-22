import { Injectable } from '@nestjs/common';
import {UserDto} from './userDTO/createUserDto.dto'
@Injectable()
export class UserService {
    private readonly users : UserDto[]=[]

    createUser(user:UserDto){
        this.users.push(user)
    }
    getUsers():UserDto[]{
        return this.users
    }
    
}
