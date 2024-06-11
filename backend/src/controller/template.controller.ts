import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TemplateService } from '../service/template.service';
import { TemplateDto } from '../dto/template.dto';
import { ObjectId } from 'mongoose';

@Controller('templates')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get('/template/:id')
  async find(@Param('id') id: ObjectId) {
    return this.templateService.findTemplateById(id);
  }

  @Get('/user/:id')
  async findAllByUserId(@Param('id') id: ObjectId) {
    return this.templateService.findAllTemplatesByUserId(id);
  }

  @Post('/create')
  async create(@Body() templateDto: TemplateDto) {
    return this.templateService.createTemplate(
      templateDto.createdBy,
      templateDto.content,
      templateDto.name,
      templateDto.title,
    );
  }

  @Put('/edit/:id')
  async update(@Param('id') id: string, @Body() templateDto: TemplateDto) {
    return this.templateService.updateTemplate(id, templateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.templateService.deleteTemplate(id);
  }
}
