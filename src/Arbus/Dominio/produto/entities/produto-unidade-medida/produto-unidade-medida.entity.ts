import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoUnidadeSiglaEntity } from '../produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';



@Entity({ name: 'produto_unidade_medida' })
export class ProdutoUnidadeMedidaEntity extends _BaseEntityType {


  @OneToOne(() => ProdutoUnidadeSiglaEntity, { eager: true })
  @JoinColumn({ name: 'sigla_unidade_primariaId' })
  sigla_primaria: ProdutoUnidadeSiglaEntity

  @Column()
  sigla_unidade_primariaId: string;


  @OneToOne(() => ProdutoUnidadeSiglaEntity, { eager: true })
  @JoinColumn({ name: 'sigla_unidade_secundariaId' })
  sigla_secundaria: ProdutoUnidadeSiglaEntity

  @Column()
  sigla_unidade_secundariaId: string;




  @Column()
  descricao: string;

  @Column({ type: 'float' })
  fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria


  @Column()
  ha_segunda_unidade: boolean;


  @Column({ type: 'float' })
  fator_conversao_secundaria: number; // define o valor de multiplacação entre unidades secundaria




}
