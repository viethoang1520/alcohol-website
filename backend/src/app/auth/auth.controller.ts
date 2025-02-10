import { Body, Controller, Post, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }
  @Post('register')
  async register(@Body() userInfo: CreateUserDto): Promise<any>  {
    try {
      const user = await this.authService.register(userInfo);
      return { message: 'Đăng ký thành công', user };

    } catch (error) {
      return { message: 'Đăng ký thất bại', error: error.message };
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    try { 

      const user = await this.authService.validateUser(loginDto);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const token = await this.authService.login(loginDto);
      return { message: 'Đăng nhập thành công', token };
    } catch (error) {
      console.log(error)
      return { message: 'Đăng nhập thất bại', error: error.message };
    }
  }
}

