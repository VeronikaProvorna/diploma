import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

import { User } from './user.schema';

export type TemplateDocument = Template & Document;

@Schema()
export class Template {
  /*@Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  createdBy: User;*/
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: Types.ObjectId;

  @Prop({ required: true, unique: true, lowercase: true, type: Object })
  content: Object; //template data

  @Prop({ required: true })
  name: string; //template name
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
