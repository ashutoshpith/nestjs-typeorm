import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

// @Entity()
export abstract class BaseEntitySelf {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'boolean', default: false })
    isArchived: boolean;

    // @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // createDateTime: Date;

    @Column({ type: 'varchar', length: 300, default: "admin" })
    createdBy: string;

    // @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // lastChangedDateTime: string;

    @Column({ type: 'varchar', length: 300, default: "admin" })
    lastChangedBy: string;

    // @Column({ type: 'varchar', length: 300, nullable: true })
    // internalComment: string | null;
}