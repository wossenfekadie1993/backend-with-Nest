import { Controller,
    Body,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
imports {AuthGuard}

@Controller('auth')
export class AuthController {}
