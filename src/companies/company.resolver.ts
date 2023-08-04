import { Resolver, Query, Args } from '@nestjs/graphql';
import { CompanyDataSource } from './company-data-source';
import { CompanyTree } from './companytree.model';

@Resolver()
export class CompanyResolver {
  constructor(private readonly dataSource: CompanyDataSource) {}

  @Query(() => [CompanyTree])
  async makeCompanyTree() {
    return this.dataSource.makeCompanyTree();
  }
}