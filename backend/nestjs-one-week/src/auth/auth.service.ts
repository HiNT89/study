import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const user = await this.usersService.create(dto);
    return { message: 'Register success', user };
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.usersService.findByEmail(dto.email);
      if (!user) throw new UnauthorizedException('Invalid credentials');
      const isMatch = await bcrypt.compare(dto.password, user.password);
      if (!isMatch) throw new UnauthorizedException('Invalid credentials');
      const payload = { sub: user.id, email: user.email };
      const token = await this.jwtService.signAsync(payload);

      return { access_token: token };
    } catch (error) {
      console.log('Login error:', error);
    }
  }
}
