import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' } // Adjust as per your requirements
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService] // Exporting AuthService if it's needed elsewhere
})
export class AuthModule {}
