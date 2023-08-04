import { Field, ObjectType } from "@nestjs/graphql"

export class TravelData {
    @Field(type => String)
    id: string;

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    employeeName: string;  // employeeName

    @Field(type => String)
    departure: string;

    @Field(type => String)
    destination: string;

    @Field(type => String)
    price: string; // price

    @Field(type => String)
    companyId: string; // companyId
}

@ObjectType()
export class Travel {
    @Field(type => String)
    id: string;

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    name: string;  // employeeName

    @Field(type => String)
    departure: string;

    @Field(type => String)
    destination: string;

    @Field(type => String)
    cost: string; // price

    @Field(type => String)
    parentId: string; // companyId
}

@ObjectType()
export class Company {
    @Field(type => String)
    id: string;

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    name: string;

    @Field(type => String)
    parentId: string;
}

@ObjectType()
export class CompanyTree {

    @Field(type => String)
    id: string;

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    name: string;

    @Field(type => String)
    parentId: string

    @Field(type => Number)
    cost: number;

    @Field(type => [CompanyTree])
    children: CompanyTree[];

    constructor(_id: string, _createdAt: string, _name: string, _parentId: string, _cost: number, _children: CompanyTree[]) {
        this.id = _id;
        this.createdAt = _createdAt;
        this.name = _name;
        this.parentId = _parentId;
        this.cost = _cost;
        this.children = _children;
    }
}
