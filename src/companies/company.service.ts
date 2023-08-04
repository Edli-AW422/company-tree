import { Injectable } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyTree } from './companytree.model';

@Injectable()
export class CompanyService {
    constructor(private readonly companyResolver: CompanyResolver) {}

    makeCompanyTree(): Promise<CompanyTree[]> {
        return this.companyResolver.makeCompanyTree();
    }
}
