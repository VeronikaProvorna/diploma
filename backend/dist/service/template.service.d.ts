/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, ObjectId } from 'mongoose';
import { TemplateDocument } from '../model/template.schema';
export declare class TemplateService {
    private templateModel;
    constructor(templateModel: Model<TemplateDocument>);
    createTemplate(createdBy: ObjectId, content: Object, name: string, title: string): Promise<TemplateDocument>;
    findAllTemplatesByUserId(createdBy: ObjectId): Promise<TemplateDocument[]>;
    findAllTemplates(): Promise<TemplateDocument[]>;
    findTemplateById(templateId: ObjectId): Promise<TemplateDocument>;
    updateTemplate(templateId: string, templateDto: any): Promise<TemplateDocument>;
    deleteTemplate(templateId: string): Promise<TemplateDocument>;
}
