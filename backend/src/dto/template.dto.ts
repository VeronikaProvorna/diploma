import { ObjectId } from 'mongoose';

export class TemplateDto {
  createdBy: ObjectId;
  content: Object;
  name: string; //name of template
  title: string;
}
