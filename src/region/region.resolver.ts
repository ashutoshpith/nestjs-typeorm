import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { RegionInput, RegionDto } from './type/region.type';

@Resolver('Region')
export class RegionResolver {
    constructor(
        private readonly ser: RegionService
    ){}

    @Query(() => [RegionDto])
    async regions():Promise<RegionDto[]>{
        return await this.ser.findAll();
    }

    @Mutation(() => RegionDto)
    async createRegion(
        @Args('data') data: RegionInput):Promise<RegionDto>{
        return await this.ser.create(data);
    }



    
}
