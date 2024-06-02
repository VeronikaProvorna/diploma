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
import { TemplateService } from '../service/template.service';
import { TemplateDto } from '../dto/template.dto';
import { ObjectId } from 'mongoose';
export declare class TemplateController {
    private readonly templateService;
    constructor(templateService: TemplateService);
    find(id: ObjectId): Promise<import("../model/template.schema").TemplateDocument>;
    findAllByUserId(id: ObjectId): Promise<import("../model/template.schema").TemplateDocument[]>;
    create(templateDto: TemplateDto): Promise<import("../model/template.schema").TemplateDocument>;
    update(id: string, templateDto: TemplateDto): Promise<import("../model/template.schema").TemplateDocument>;
    delete(id: string): Promise<import("../model/template.schema").TemplateDocument>;
}
