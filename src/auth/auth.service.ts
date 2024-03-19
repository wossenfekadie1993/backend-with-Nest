import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema'; // Importing the User schema
import * as bcrypt from 'bcrypt'; // Importing bcrypt for password hashing
import { JwtService } from '@nestjs/jwt'; // Importing JwtService for token generation
import { signUpDto } from './dto/signup.dto'; // Importing the DTO for sign-up data

@Injectable()
export class AuthService {
   constructor(
    @InjectModel(User.name) // Injecting the User model
    private userModel: Model<User>,
    private jwtService: JwtService // Injecting JwtService
   ){}

   async signUp(signUpDto: signUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    // Hashing the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new user with hashed password
    const user = await this.userModel.create({
        name, email, password: hashedPassword
    });

    // Generating JWT token for the user
    const token = this.jwtService.sign({ id: user._id });

    // Returning the token
    return { token };
   }
}
