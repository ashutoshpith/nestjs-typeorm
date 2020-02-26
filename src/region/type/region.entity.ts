import {  Column, Entity, OneToMany } from "typeorm";
import { BaseEntitySelf } from "src/Base/base.entity";
import { Country } from "../../country/type/country.entity";

@Entity()
export class Region extends BaseEntitySelf{
    
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Country, country => country.region)
    countries: Country[]

}
