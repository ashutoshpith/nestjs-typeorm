import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region, RegionInput } from './type/region.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class RegionService {
    constructor(
        @InjectRepository(Region)
        private readonly repo: Repository<Region>,
        private readonly connection: Connection
    ){}

    async create(data: RegionInput):Promise<Region>{
        // const region = new Region();
        // region.name = data.name;
        // region.description = data.description;
        // region.countries = data.countries;
        // return this.repo.save(region);
        // const { name, description, countries} = data
        const region = this.repo.create({
            ...data,
            countries: data.countries 
        });
        return await this.repo.save(region);
    }

    async findAll():Promise<Region[]>{
        const regionRepo = this.connection.getRepository(Region);
        const regions = await regionRepo.find({
            relations: ['countries'],
            order:{ id: 'DESC', name: 'DESC'}
        })
        return regions;
    }
}
