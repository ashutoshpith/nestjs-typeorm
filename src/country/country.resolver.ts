import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryDto, CountryInput } from './type/country.type';

@Resolver('Country')
export class CountryResolver {
    constructor(
        private readonly res:CountryService
    ){}


    @Query(() => [CountryDto])
   async countries(
       @Args('skip') skip: number,
       @Args('take') take: number
   ):Promise<CountryDto[]>{
        return this.res.findAll(skip, take);

    }

    @Query(() => CountryDto)
    async country(
        @Args('id') id: number
    ):Promise<CountryDto>{
        return this.res.find(id);
    }

    @Mutation(() => CountryDto)
    async createCountries(
        @Args('data') data: CountryInput
    ):Promise<CountryDto>{
        return await this.res.create(data);
    }

    @Mutation(() => CountryDto)
    async updateCountry(
        @Args('id') id: number,
        @Args('data') data: CountryInput
    ):Promise<CountryDto>{
        return await this.res.update(id, data);
    }

    @Mutation(() => CountryDto)
    async deleteCountry(
        @Args('id') id: number
    ):Promise<any>{
        const res = this.res.delete(id);
       return await res;

    }
}
