import { ObjectType, Field } from "type-graphql";

@ObjectType()
export abstract class BaseDto{
    @Field()
    id: number;

    @Field()
    isArchived: boolean;

    @Field()
    createdBy: string;

    @Field()
    lastChangedBy: string;

    @Field()
    isActive: boolean;

    // createDateTime: Date;
    // lastChangedDateTime: string;
}