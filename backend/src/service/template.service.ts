import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { Template, TemplateDocument } from '../model/template.schema';
import { TemplateDto } from 'src/dto/template.dto';
import { User, UserDocument } from '../model/user.schema';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<TemplateDocument>,
    //@InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async createTemplate(
    createdBy: ObjectId,
    content: Object,
    name: string,
  ): Promise<TemplateDocument> {
    const createdTemplate = new this.templateModel({
      createdBy,
      content,
      name,
    });

    return await createdTemplate.save();
  }

  async findAllTemplatesByUserId(
    createdBy: ObjectId,
  ): Promise<TemplateDocument[]> {
    console.log('userid in find all by userid', createdBy);
    return await this.templateModel.find({ createdBy }).exec();
  }

  async findAllTemplates(): Promise<TemplateDocument[]> {
    return await this.templateModel.find().exec();
  }

  async findTemplateById(templateId: ObjectId): Promise<TemplateDocument> {
    const template = await this.templateModel.findById(templateId).exec();
    if (!template) {
      throw new NotFoundException('Template not found');
    }
    return template;
  }

  async updateTemplate(
    templateId: string,
    templateDto: any,
  ): Promise<TemplateDocument> {
    const updatedTemplate = await this.templateModel.findByIdAndUpdate(
      templateId,
      templateDto,
      { new: true },
    );
    if (!updatedTemplate) {
      throw new NotFoundException('Template not found');
    }
    return updatedTemplate;
  }

  async deleteTemplate(templateId: string): Promise<TemplateDocument> {
    const deletedTemplate =
      await this.templateModel.findByIdAndDelete(templateId);
    if (!deletedTemplate) {
      throw new NotFoundException('Template not found');
    }
    return deletedTemplate;
  }
}
