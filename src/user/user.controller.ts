import { Controller, HttpCode, Param, Req } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('user')
export class UserController {
    @Get()
    getUser(@Req() request:Request): String {
    return 'THIS IS ALL USERS';
    }
    @Post()
    @HttpCode(201)
    createUser() {
        return "the user is created"
    }

    @Get(':id')
        getOneUser(@Param('id') id:String){
            return {
                id
            }
    }
    @Patch(':id')
    updateUser(@Param('id') id:String){
        return{
            'message': `This is the updated user ${id}`
        }
    }
    @Delete(':id')
    deleteUser(@Param('id') id :String){
        return {
            'message': `This is the deleted user ${id}`
        }
    }

}

