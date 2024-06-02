"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const template_schema_1 = require("../model/template.schema");
let TemplateService = class TemplateService {
    constructor(templateModel) {
        this.templateModel = templateModel;
    }
    async createTemplate(createdBy, content, name) {
        const createdTemplate = new this.templateModel({
            createdBy,
            content,
            name,
        });
        return await createdTemplate.save();
    }
    async findAllTemplatesByUserId(createdBy) {
        console.log('userid in find all by userid', createdBy);
        return await this.templateModel.find({ createdBy }).exec();
    }
    async findAllTemplates() {
        return await this.templateModel.find().exec();
    }
    async findTemplateById(templateId) {
        const template = await this.templateModel.findById(templateId).exec();
        if (!template) {
            throw new common_1.NotFoundException('Template not found');
        }
        return template;
    }
    async updateTemplate(templateId, templateDto) {
        const updatedTemplate = await this.templateModel.findByIdAndUpdate(templateId, templateDto, { new: true });
        if (!updatedTemplate) {
            throw new common_1.NotFoundException('Template not found');
        }
        return updatedTemplate;
    }
    async deleteTemplate(templateId) {
        const deletedTemplate = await this.templateModel.findByIdAndDelete(templateId);
        if (!deletedTemplate) {
            throw new common_1.NotFoundException('Template not found');
        }
        return deletedTemplate;
    }
};
exports.TemplateService = TemplateService;
exports.TemplateService = TemplateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(template_schema_1.Template.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TemplateService);
//# sourceMappingURL=template.service.js.map