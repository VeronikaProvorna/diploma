import { ObjectId } from 'mongoose';

export class TemplateDto {
  createdBy: ObjectId; //username
  content: Object;
  name: string; //name of template
}
