import { Module } from '@nestjs/common';
import { AppConfigModule } from '@/config/config.module';
import { DatabaseModule } from '@/core/database/database.module';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, UsersModule, AuthModule],
})
export class AppModule {}
