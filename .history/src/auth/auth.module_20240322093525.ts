import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from '../'

@Module({
  imports:[UserModule,
    JwtModule.register(
      global:   true,
      secret:
    )
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
