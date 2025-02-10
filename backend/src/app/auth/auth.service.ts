import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    ) { }
  
  async register(userInfo: CreateUserDto): Promise<User> {
    console.log(userInfo)
    const existingUser = await this.usersService.findByEmail(userInfo.email);
    if (existingUser) {
      throw new ConflictException('Email đã được sử dụng');
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(userInfo.password, saltRounds);
    const user = await this.usersService.createUser({ ...userInfo, passwordHash });
    return user;
  }

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.passwordHash);
    if (!isPasswordValid) {
      return null;
    }
    const { passwordHash, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto): Promise<{access_token: string}> {
    const payload = { email: loginDto.email, sub: loginDto.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

