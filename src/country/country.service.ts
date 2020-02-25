import { Injectable } from '@nestjs/common';
import { Repository, Connection } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Country, CountryInput } from './type/country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private readonly ser: Repository<Country>,
        private readonly connection: Connection

    ){}

    async findMethod(){
       
        return 
    }

   async create(data: CountryInput):Promise<Country>{
        const country = new Country();
        country.name = data.name;
        
        return this.ser.save(country);
    }

    async findAll(skipVal: number, takeVal: number):Promise<Country[]>{
        return await this.ser.find({
        skip: skipVal,
        take: takeVal,
        order: {
            id: "DESC",
            name: "DESC",
        },
        }) 
    }


    async find(
        id: number
    ):Promise<Country>{
        return this.ser.findOneOrFail(id);
    }
    async update(
        id: number,
        data: CountryInput
    ): Promise<Country>{
        return this.ser.save({
            ...data, id: Number(id)
        })
    }

    async delete(
        id: number
    ):Promise<any>{
        await this.ser.findOneOrFail(id);
        return this.ser.delete(id);
    }
}
