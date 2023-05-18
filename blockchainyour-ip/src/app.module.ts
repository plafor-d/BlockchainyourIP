import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { FormationsModule } from './formations/formations.module';
import { Formation } from './formations/entities/formation.entity';
import { GuidesModule } from './guides/guides.module';
import { Guide } from './guides/entities/guide.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      entities: [User, Formation, Guide]
    }),
    UsersModule,
    FormationsModule,
    GuidesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
