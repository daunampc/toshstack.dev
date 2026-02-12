import { Auth } from '@/decorators/http.decorator';
import { Controller } from '@nestjs/common';

@Controller('users')
@Auth('member')
export class UsersUserController {}
