import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "src/entities/user.entity";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':uid')
  async getUserByID(@Param('uid') uid: string) {
    return this.userService.getUserByID(uid);
  }

  
}