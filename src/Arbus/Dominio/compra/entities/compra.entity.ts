import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';
import { PessoasEntity } from '../../pessoa/entities/pessoa.entity';
import { CompraItemEntity } from './compraItem.entity';

@Entity({ name: 'compra' })
export class CompraEntity extends _BaseEntity {

  @Column()
  previsao_entrega: Date;


  @Column()
  fornecedor_id: string;


  @OneToMany(() => CompraItemEntity, (item) => item.compras)
  @JoinColumn({ referencedColumnName: 'compraId' })
  itens: CompraItemEntity[]


  @OneToOne(() => PessoasEntity)
  @JoinColumn()
  fornecedor: PessoasEntity



}
