import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyDataSource } from './company-data-source';
import { CompanyResolver } from './company.resolver';

@Module({
  controllers: [CompanyController],
  providers: [
    CompanyService, 
    CompanyDataSource, 
    CompanyResolver
  ]
})
export class CompaniesModule { }
