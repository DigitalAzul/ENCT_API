import { Field, InputType } from '@nestjs/graphql';
import { ESCALA_TEMRATURA_ENUM, SITUACAO_PRODUTO } from 'src/Arbus/Dominio/comuns/types/Produto.types';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../../entities/produto-classificacoa/produto-classificacao-enum';

@InputType()
export class InsProdutoEntraDto {



  @Field()
  produto_marcaId: string;

  @Field()
  produto_grupoId: string;

  @Field()
  produto_sub_grupoId: string;

  @Field()
  sigla_unidade_primariaId: string;

  @Field()
  fator_conversao_primaria: number;

  @Field()
  ha_segunda_unidade: boolean;

  @Field()
  codigo_produto: string;

  @Field()
  licenca_anvisa_num: string;

  @Field()
  data_validade_licenca_anvisa: string;

  @Field()
  referencia: string;

  @Field()
  peso_bruto: number;

  @Field()
  peso_liquido: number;

  @Field()
  situacao: SITUACAO_PRODUTO;

  @Field()
  classificacao: PRODUTO_CLASSIFICACAO_ENUN; 

  @Field()
  escala_temperatura: ESCALA_TEMRATURA_ENUM;

  @Field({ nullable: true })
  sigla_unidade_secundariaId?: string;

  @Field({ nullable: true })
  fator_conversao_secundaria?: number;

  //
  // NAO OBRIGATORIOS
  //
  @Field({ nullable: true })
  codigo_ncm?: string;

  @Field({ nullable: true })
  codigo_rms?: string;

  @Field({ nullable: true })
  descricao?: string;

  @Field({ nullable: true })
  descricao_tecnica?: string;

  @Field({ nullable: true })
  observacoes?: string;

  @Field({ nullable: true })
  imagem?: string;

  @Field({ nullable: true })
  temp_max_conservacao?: number;

  @Field({ nullable: true })
  temp_min_conservacao?: number;




}
