import { Controller, HttpCode, Param, Req,Body, Header, Redirect, Query } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UserDto } from './userDTO/createUserDto.dto';
import { UserService } from './user.service';
// import { version } from 'os';
// import { promises } from 'dns';
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

    @Post()
    createUser(@Body() createUserDto:UserDto){
        return this.userService.create(createUserDto);
    }
    @Get(':id')
    getUser(@Param('id') id:string){
        return this.userService.findOne(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id:string,@Body() updateUserDto:UserDto){
        return this.userService.update(id,updateUserDto);
    }
    @Delete(':id')
    deleteUser(@Param('id') id :String){
        return this.userService.remove({id)
    }

}

