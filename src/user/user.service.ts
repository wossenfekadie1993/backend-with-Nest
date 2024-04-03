import { Injectable, Inject, NotFoundException, ConflictException } from '@nestjs/common';
import { UserDto } from './userDTO/createUserDto.dto';
import { UpdateUserDto } from './userDTO/updateUserDto.dto';
import { User } from 'src/interfaces/user.interface';
import { USER_MODEL } from 'src/constants';
import mongoose, { Model } from 'mongoose';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL)
    private UserModel: Model<User>,
  ) {}

  async create(createUserDto: UserDto): Promise<User> {
    try {
      // Hash the password before saving
      const hashedPassword = hashSync(createUserDto.password, 10); // Adjust the salt rounds as needed
      const userWithHashedPassword = {
        ...createUserDto,
        password: hashedPassword,
      };
      
      const createdUser = new this.UserModel(userWithHashedPassword);
      return createdUser.save();
      
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictException('Email already exists');
      }
      throw new Error('Failed to create user');
    }
  }
  

  async findAll(): Promise<User[]> {
    try {
      const Users = await this.UserModel.find().exec();
      if (!Users || Users.length === 0) {
        throw new NotFoundException('No users found');
      }
      return Users;
    } catch (err) {
      throw err;
    }
  }

  async findOne(identifier: string): Promise<User> {
    try {
      // Check if the identifier is a valid ObjectId
      const isObjectId = mongoose.Types.ObjectId.isValid(identifier);
      const user = await (isObjectId
        ? this.UserModel.findById(identifier).exec() // If valid ObjectId, search by ID
        : this.UserModel.findOne({ email: identifier }).exec()); // Otherwise, search by email
      
      if (!user) {
        throw new NotFoundException(`User with ID or email "${identifier}" not found.`);
      }       
      return user;
    } catch (err) {
      throw err;
    }
  }
  

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const updatedUser = await this.UserModel.findByIdAndUpdate(
        id,
        updateUserDto,
        { new: true },
      ).exec();
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string): Promise<any> {
    try {
      const result = await this.UserModel.deleteOne({ _id: id }).exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return `User with ID ${id} deleted successfully`;
    } catch (err) {
      throw err;
    }
  }
}
