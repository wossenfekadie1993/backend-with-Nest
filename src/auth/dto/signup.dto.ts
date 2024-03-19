import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signUpDto{
    @IsNotEmpty()
    @IsString()
    readonly name:string

    @IsNotEmpty()
    @IsEmail({},{message:"please enter correct email"})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password : string

}