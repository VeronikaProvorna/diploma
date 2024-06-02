import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateController } from 'src/controller/template.controller';
import { Template, TemplateSchema } from 'src/model/template.schema';
import { TemplateService } from 'src/service/template.service';
import { UserModule } from './user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: Template.name, schema: TemplateSchema },
    ]),
  ],
  providers: [TemplateService],
  controllers: [TemplateController],
  exports: [TemplateService],
})
export class TemplateModule {}
