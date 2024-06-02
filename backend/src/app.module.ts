import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateController } from './controller/template.controller';
import { TemplateService } from './service/template.service';
import { Template, TemplateSchema } from './model/template.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User, UserSchema } from './model/user.schema';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './module/user.module';
import { TemplateModule } from './module/template.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TemplateModule,
    MongooseModule.forRoot('mongodb://localhost/templates'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
