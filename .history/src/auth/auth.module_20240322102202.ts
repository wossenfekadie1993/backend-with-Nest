import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service'; // Import UserService

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' } 
    })
  ],
  providers: [
    AuthService,
    UserService, // Include UserService as a provider
  ],
  controllers: [AuthController],
  exports: [AuthService] 
})
export class AuthModule {}
