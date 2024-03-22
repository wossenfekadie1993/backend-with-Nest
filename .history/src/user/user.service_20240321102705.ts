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

    async create(createUserDto: UserDto): Promise<User> {
        const createdUser = new this.UserModel(createUserDto);
        return createdUser.save();
      }
      async findAll(): Promise<User[]> {
        return this.UserModel.find().exec();
      }
      async findOne(id: string): Promise<User> {
        return  this.UserModel.findById(id).exec();
      }
      async update(updateUserDto:UserDto):Promise<User>{
        const updatedUser =new this.UserModel(updateUserDto)
        return  updated.save()

      }
}
