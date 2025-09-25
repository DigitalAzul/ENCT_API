import { _BaseEntityTypeResposta } from 'src/Arbus/Dominio/comuns/interfaces/_BaseEntityTypeResposta';
import { Column, Entity } from 'typeorm';
import { ProdutoUnidadeSiglaEntity } from '../../entities/produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';



@Entity()
export class UnidadeMedidaProdutoRespostaEntityDto extends _BaseEntityTypeResposta {



  sigla_primaria: ProdutoUnidadeSiglaEntity

  @Column()
  sigla_unidade_primariaId: string;



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
