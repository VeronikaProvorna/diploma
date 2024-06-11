import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
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
