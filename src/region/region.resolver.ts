import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { RegionInput, Region } from './type/region.entity';

@Resolver('Region')
export class RegionResolver {
    constructor(
        private readonly ser: RegionService
    ){}

    @Query(() => [Region])
    async regions():Promise<Region[]>{
        return await this.ser.findAll();
    }

    @Mutation(() => Region)
    async createRegion(
        @Args('data') data: RegionInput):Promise<Region>{
        return await this.ser.create(data);
    }



    
}
