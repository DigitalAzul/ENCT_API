import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ulid } from "ulid";



@Entity()
export abstract class _BaseEntityType {
    @PrimaryColumn()
    _id: string;

    @CreateDateColumn()
    _criado_em: Date;

    @Column()
    _criado_por_id: string;


    @UpdateDateColumn({ nullable: true })
    _atualizado_em: Date;


    @Column({ nullable: true })
    _atualizado_por_id?: string;


    @DeleteDateColumn()
    _excluido_em: Date

    @Column({ nullable: true })
    _excluido_por_id?: string;


    @BeforeInsert()
    updateDates() {
        this._id = ulid()
        this._criado_por_id = 'dazl'
    }
}


