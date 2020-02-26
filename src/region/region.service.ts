import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionDto, RegionInput } from './type/region.type';
import { Repository, Connection } from 'typeorm';
import { Region } from 'src/region/type/region.entity';

@Injectable()
export class RegionService {
    constructor(
        @InjectRepository(Region)
        private readonly repo: Repository<Region>,
        private readonly connection: Connection
    ){}

    async create(data: RegionInput):Promise<RegionDto>{
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

    async findAll():Promise<RegionDto[]>{
        const regionRepo = this.connection.getRepository(Region);
        const regions = await regionRepo.find({
            relations: ['countries'],
            order:{ id: 'DESC', name: 'DESC'}
        })
        return regions;
    }
}
