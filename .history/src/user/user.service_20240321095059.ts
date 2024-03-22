import { Injectable,Inject } from '@nestjs/common';
import {UserDto} from './userDTO/createUserDto.dto';
import { User } from 'src/interfaces/user.interface';
import { USER_MODEL } from 'src/constants';
import {Model} from 'mongoose'
@Injectable()
export class UserService {

    constructor(@Inject(USER_MODEL)
    private UserModel: Model<User>
    ){}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
      }

    // private readonly users : UserDto[]=[]

    // createUser(user:UserDto){
    //     this.users.push(user)
    // }
    // getUsers():UserDto[]{
    //     return this.users
    // }
    
}
