import { RESTDataSource } from '@apollo/datasource-rest';
import { Company, CompanyTree, Travel, TravelData } from './companytree.model';

export class CompanyDataSource extends RESTDataSource {
    
    allCompanies: Company[];
    allTravels: Travel[];
    companyTrees: CompanyTree[];

    constructor() {
        super();
        this.baseURL = 'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/';
        this.allCompanies = [];
        this.allTravels = [];
    }

    async initialize() {
        this.allCompanies = await this.get(`companies`);
        const travelData: TravelData[] = await this.get(`travels`);

        let _allTravels: Travel[] = [];
        
        travelData.forEach((_data: TravelData)=>{
            let travel: Travel = new Travel;
            travel.id = _data.id;
            travel.name = _data.employeeName;
            travel.parentId = _data.companyId;
            travel.createdAt = _data.createdAt;
            travel.departure = _data.departure;
            travel.destination = _data.destination;
            travel.cost = _data.price;
            _allTravels.push(travel);
        })
        
        this.allTravels = _allTravels;
    }

    async makeCompanyTreeSource(parentId: string = "0"): Promise<CompanyTree[]> {
        if (parentId === "0") {
            await this.initialize();
        }

        let _allCompanies = this.allCompanies.filter((company: Company) => {
            return company.parentId === parentId;
        });

        let _companyTrees: CompanyTree[] = [];
        let company: Company;
        for(let i = 0; i<_allCompanies.length; i++) {
            company = _allCompanies[i];
            let travels = this.allTravels.filter((travel) => {
                return travel.parentId == company.id
            })

            let childrenFromTravels: CompanyTree[] = [];
            
            let sum: number = 0;
            travels.map((travel: Travel) => {
                let childFromTravel: CompanyTree = new CompanyTree(travel.id, travel.createdAt, travel.name, travel.parentId, parseFloat(travel.cost), []);
                childrenFromTravels.push(childFromTravel);
            });
            let childrenTree: CompanyTree[] = childrenFromTravels.concat(await this.makeCompanyTreeSource(company.id));
            childrenTree.map((tree: CompanyTree)=> {
                sum += tree.cost;
            })
            let companyTree: CompanyTree = new CompanyTree(company.id, company.createdAt, company.name, company.parentId, sum, childrenTree);
            _companyTrees.push(companyTree);
        }

        return _companyTrees;
    }

    async makeCompanyTree(): Promise<CompanyTree[]> {
        this.companyTrees = [];
        this.companyTrees = await this.makeCompanyTreeSource();
        return this.companyTrees;
    }
}