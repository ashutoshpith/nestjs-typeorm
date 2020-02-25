import {  Column, Entity, OneToMany } from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";
import { BaseEntitySelf } from "src/Base/base.entity";
import { Country, CountryInput } from "src/country/type/country.entity";

@ObjectType({ isAbstract: true})
@Entity()
export class Region extends BaseEntitySelf{
    
    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field(() => [Country])
    @OneToMany(() => Country, country => country.region, {
        eager: true
    })
    countries: Country[]

}

@InputType()
export class RegionInput{
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => [CountryInput])
    countries: []

}