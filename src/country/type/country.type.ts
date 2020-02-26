import { ObjectType, InputType, Field, ArgsType } from "type-graphql";

import { BaseDto } from "src/Base/base-dto";

@ObjectType({ isAbstract: true})
export class CountryDto extends BaseDto{
    @Field()
    name: string;
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