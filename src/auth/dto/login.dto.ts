import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class logInDto{
    
    @IsNotEmpty()
    @IsEmail({},{message:"please enter correct email"})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password : string

}