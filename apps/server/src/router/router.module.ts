import { Module } from '@nestjs/common';
import { RoutesAdminModule } from './routes/routes.admin.module';
import { RoutesPublicModule } from './routes/routes.public.module';
import { RoutesUserModule } from './routes/routes.user.module';

@Module({
  imports: [RoutesAdminModule, RoutesPublicModule, RoutesUserModule],
})
export class RouterModule {}
