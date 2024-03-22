import { Injectable, Inject, NotFoundException, ConflictException } from '@nestjs/common';
import { UserDto } from './userDTO/createUserDto.dto';
import { UpdateUserDto } from './userDTO/updateUserDto.dto';
import { User } from 'src/interfaces/user.interface';
import { USER_MODEL } from 'src/constants';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL)
    private UserModel: Model<User>,
  ) {}

  async create(createUserDto: UserDto): Promise<User> {
    try{
      const createdUser = new this.UserModel(createUserDto);
      return createdUser.save();
    }catch(err){
      if(err.code === 11000){
        throw new ConflictException('email already exist')
      }
      throw new Error('failed to create user')
    }
    
  }

  async findAll(): Promise<User[]> {
    
    return this.UserModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.UserModel.findById(id).exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.UserModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    ).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }
  async remove(id: string): Promise<any> {
    const result = this.UserModel.deleteOne({ _id: id }).exec();
    if ((await result).deletedCount === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
