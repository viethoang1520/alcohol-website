
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserByID(uid: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ userID: uid });
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }
  async createUser({
    fullName,
    email,
    passwordHash,
    phoneNumber, 
    address
  }: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create({
      fullName,
      email,
      passwordHash,
      phoneNumber,
      address
    });
    return await this.usersRepository.save(newUser);
  }

  async updateUser(uid: string, updateData: Partial<User>): Promise<User | null> {
    await this.usersRepository.update(uid, updateData);
    return this.getUserByID(uid);
  }

  async deleteUser(uid: number): Promise<void> {
    await this.usersRepository.delete(uid);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

}
