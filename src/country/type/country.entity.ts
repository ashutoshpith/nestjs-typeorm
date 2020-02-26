import { BaseEntitySelf } from "src/Base/base.entity";
import { Region } from "src/region/type/region.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Country extends BaseEntitySelf{

    @Column()
    name: string;

    @ManyToOne(() => Region, region => region.countries, {
        cascade: true
    })
    // @JoinColumn({name: 'country_id'})
    region: Region

}