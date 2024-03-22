import { Injectable,Inject ,NotFoundException} from '@nestjs/common';
import {UserDto} from './userDTO/createUserDto.dto';
import {upda}
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
      async update(id:string,updateUserDto:UserDto):Promise<User>{
        const updatedUser =await this.UserModel.findByIdAndUpdate(id,updateUserDto, { new: true }).exec()
        if (!updatedUser) {
          throw new NotFoundException(`User with ID ${id} not found`);
      }
        return  updatedUser
      }
      async remove(id:string):Promise<any>{
        const result= this.UserModel.deleteOne({ _id : id}).exec();
        if ((await result).deletedCount === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
      }
}
