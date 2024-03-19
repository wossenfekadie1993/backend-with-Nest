import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule
      inject: [ConfigService], // Inject ConfigService
      useFactory: (configService: ConfigService) => ({ // Correct useFactory signature
        secret : configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string | number>('JWT_EXPIRE'),
        },
      }),
    }),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
