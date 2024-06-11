import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export type TemplateDocument = Template & Document;

@Schema()
export class Template {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: Types.ObjectId;

  @Prop({ required: true, unique: true, lowercase: true, type: Object })
  content: Object; //template data

  @Prop({ required: true })
  name: string; //template name

  @Prop({ required: true })
  title: string; //template title
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
