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
exports.TemplateController = void 0;
const common_1 = require("@nestjs/common");
const template_service_1 = require("../service/template.service");
const template_dto_1 = require("../dto/template.dto");
let TemplateController = class TemplateController {
    constructor(templateService) {
        this.templateService = templateService;
    }
    async find(id) {
        console.log('find by template id :', id);
        return this.templateService.findTemplateById(id);
    }
    async findAllByUserId(id) {
        console.log('find by template user id :', id);
        return this.templateService.findAllTemplatesByUserId(id);
    }
    async create(templateDto) {
        console.log('create template: ', templateDto);
        return this.templateService.createTemplate(templateDto.createdBy, templateDto.content, templateDto.name);
    }
    async update(id, templateDto) {
        return this.templateService.updateTemplate(id, templateDto);
    }
    async delete(id) {
        return this.templateService.deleteTemplate(id);
    }
};
exports.TemplateController = TemplateController;
__decorate([
    (0, common_1.Get)('/template/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "findAllByUserId", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [template_dto_1.TemplateDto]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, template_dto_1.TemplateDto]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemplateController.prototype, "delete", null);
exports.TemplateController = TemplateController = __decorate([
    (0, common_1.Controller)('templates'),
    __metadata("design:paramtypes", [template_service_1.TemplateService])
], TemplateController);
//# sourceMappingURL=template.controller.js.map