import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, InputType, Field, ArgsType } from "type-graphql";
import { BaseEntitySelf } from "src/Base/base.entity";
import { Region } from "src/region/type/region.entity";

@ObjectType({ isAbstract: true })
@Entity()
export class Country extends BaseEntitySelf{
    
    // @Field()
    // @PrimaryGeneratedColumn()
    // id: number

    @Field()
    @Column()
    name: string;

    @Field()
    @ManyToOne(() => Region, region => region.countries, {
        cascade: true
    })
    // @JoinColumn({name: 'country_id'})
    region: Region

}

@InputType()
export class CountryInput{

    @Field()
    name: string;
}

@ArgsType()
export class OrderType{
    @Field()
  name: string
}