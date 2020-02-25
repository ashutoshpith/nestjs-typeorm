import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export abstract class BaseEntitySelf {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Field()
    @Column({ type: 'boolean', default: false })
    isArchived: boolean;

    // @Field()
    // @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // createDateTime: Date;

    @Field()
    @Column({ type: 'varchar', length: 300, default: "admin" })
    createdBy: string;

    // @Field()
    // @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // lastChangedDateTime: string;

    @Field()
    @Column({ type: 'varchar', length: 300, default: "admin" })
    lastChangedBy: string;

    // @Field()
    // @Column({ type: 'varchar', length: 300, nullable: true })
    // internalComment: string | null;
}