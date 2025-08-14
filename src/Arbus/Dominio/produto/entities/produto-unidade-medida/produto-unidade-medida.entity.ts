import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_unidade_medida' })
export class ProdutoUnidadeMedidaEntity extends _BaseEntityType {


  @Column()
  descricao: string;


  @Column()
  sigla_unidade_primaria_id: string;


  @Column({ type: 'float' })
  fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria


  @Column()
  ha_segunda_unidade: boolean;


  @Column()
  sigla_unidade_secundaria_id: string;


  @Column({ type: 'float' })
  fator_conversao_secundaria: number; // define o valor de multiplacação entre unidades secundaria




}
