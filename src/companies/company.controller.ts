import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyTree } from './companytree.model';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    getCompany(): Promise<CompanyTree[]> {
        return this.companyService.makeCompanyTree();
    }
}
