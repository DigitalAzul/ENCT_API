import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';
import { ProdutoEntity } from '../../produto/entities/produto/produto.entity';
import { CompraEntity } from './compra.entity';

@Entity({ name: 'compra_itens' })
export class CompraItemEntity extends _BaseEntityType {


  @ManyToOne(() => CompraEntity, (compra) => compra.itens)
  compras: CompraEntity

  @Column()
  compraId: string;


  @OneToOne(() => ProdutoEntity)
  @JoinColumn()
  produto: ProdutoEntity

  @Column()
  produtoId: string;



  @Column({ type: 'numeric' })
  quantidade: number;


  @Column({ type: 'numeric' })
  valor_esperado: number;


  @Column({ type: 'numeric' })
  valor_negociado: number;


  @Column({ type: 'numeric' })
  desconto: number;


  @Column({ type: 'numeric' })
  valor_total: number;



}
