import { ObjectType, InputType, Field } from "type-graphql";
import { CountryDto, CountryInput } from "src/country/type/country.type";
import { BaseDto } from "src/Base/base-dto";

@ObjectType({ isAbstract: true})
export class RegionDto extends BaseDto{
    
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => [CountryDto])
    countries: CountryDto[]

}

@InputType()
export class RegionInput{
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => [CountryInput])
    countries: []

}