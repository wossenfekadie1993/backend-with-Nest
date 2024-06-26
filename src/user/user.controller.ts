import { Controller, HttpCode, Param, Req,Body, Header, Redirect, Query, ConflictException, NotFoundException } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UserDto } from './userDTO/createUserDto.dto';
import { UpdateUserDto } from './userDTO/updateUserDto.dto';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';

@Controller('user')
export class UserController {
    // @Get()
    // redirect url
    // @Redirect('https://nestjs.com',301)
    // getUser(@Query('version') version){
    //     if(version && version==='5'){}
    //         return {url: 'https://docs.nestjs.com/v5/'}
    // }
    // getUsers(@Query() ){
    //     return []
    // }
    // constructor(private UserService:  UserService) {}
    // @Post()
    // async create(@Body() userDTO: UserDto) {
    //     this.UserService.create(userDTO);
    // }
    // @Post()
    // @Header('Cache-Control','none')
    // @HttpCode(201)
    // createUser(@Body() createUserDto:UserDto) {
    //     return `the first user is name: ${createUserDto.name} email:${createUserDto.email} password:${createUserDto.password}`; 
    // }
    
    constructor(private readonly userService:UserService){}

    @Get()
    getUsers(){
        return this.userService.findAll();
    }

    @Post('register')
    async createUser(@Body() createUserDto: UserDto): Promise<User> {
      try {
        return await this.userService.create(createUserDto);
      } catch (err) {
        if (err instanceof ConflictException) {
          throw new ConflictException(err.message);
        }
        throw new NotFoundException(err.message);
      }
    }
    @Get(':id')
    getUser(@Param('id') id:string){
        return this.userService.findOne(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
        return this.userService.update(id,updateUserDto);
    }
    @Delete(':id')
    deleteUser(@Param('id') id :string){
        return this.userService.remove(id)
    }

}

