import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';



@Entity()
export abstract class _BaseEntityTypeResposta {
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


}


