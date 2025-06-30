import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';

@Module({
  providers: [JwtStrategy, AuthService, JwtService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'yourSecretKey', // thay bằng SECRET thực tế
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
