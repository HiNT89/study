import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';

const mockUsers: User[] = [
  { id: 1, name: 'User 1' } as User,
  { id: 2, name: 'User 2' } as User,
];

const mockUserRepository = () => ({
  find: jest.fn().mockResolvedValue(mockUsers),
  findOneBy: jest.fn().mockResolvedValue(mockUsers[0]),
  save: jest
    .fn()
    .mockImplementation((user) => Promise.resolve({ id: 3, ...user })),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
});

describe('UsersService', () => {
  let service: UsersService;
  let repo: ReturnType<typeof mockUserRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get(getRepositoryToken(User));
  });

  it('should return all users', async () => {
    const users = await service.findAll();
    expect(users).toEqual(mockUsers);
    expect(repo.find).toHaveBeenCalled();
  });

  it('should return one user', async () => {
    const user = await service.findOne(1);
    expect(user).toEqual(mockUsers[0]);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should create a user', async () => {
    const newUser = await service.create({ name: 'Test' });
    expect(newUser).toEqual({ id: 3, name: 'Test' });
    expect(repo.save).toHaveBeenCalledWith({ name: 'Test' });
  });

  it('should update a user', async () => {
    const result = await service.update(1, { name: 'Updated' });
    expect(result).toEqual({ affected: 1 });
    expect(repo.update).toHaveBeenCalledWith(1, { name: 'Updated' });
  });

  it('should delete a user', async () => {
    const result = await service.remove(1);
    expect(result).toEqual({ affected: 1 });
    expect(repo.delete).toHaveBeenCalledWith(1);
  });
});
