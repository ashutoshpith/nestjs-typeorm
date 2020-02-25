import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country, CountryInput } from './type/country.entity';

@Resolver('Country')
export class CountryResolver {
    constructor(
        private readonly res:CountryService
    ){}


    @Query(() => [Country])
   async countries(
       @Args('skip') skip: number,
       @Args('take') take: number
   ):Promise<Country[]>{
        return this.res.findAll(skip, take);

    }

    @Query(() => Country)
    async country(
        @Args('id') id: number
    ):Promise<Country>{
        return this.res.find(id);
    }

    @Mutation(() => Country)
    async createCountries(
        @Args('data') data: CountryInput
    ):Promise<Country>{
        return await this.res.create(data);
    }

    @Mutation(() => Country)
    async updateCountry(
        @Args('id') id: number,
        @Args('data') data: CountryInput
    ):Promise<Country>{
        return await this.res.update(id, data);
    }

    @Mutation(() => Country)
    async deleteCountry(
        @Args('id') id: number
    ):Promise<any>{
        const res = this.res.delete(id);
       return await res;

    }
}
