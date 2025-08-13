import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ulid } from "ulid";



@Entity()
export abstract class _BaseEntityType {
    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    criado_em: Date;

    @Column()
    criado_por_id: string;


    @UpdateDateColumn({ nullable: true })
    atualizado_em: Date;


    @Column({ nullable: true })
    atualizado_por_id?: string;


    @DeleteDateColumn()
    excluido_em: Date

    @Column({ nullable: true })
    excluido_por_id?: string;


    @BeforeInsert()
    updateDates() {
        this.id = ulid()
    }
}


