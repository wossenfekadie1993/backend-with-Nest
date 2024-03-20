import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    allUser(){
        return []
    }
    @Post()
    create(){
        return 
    }
}
