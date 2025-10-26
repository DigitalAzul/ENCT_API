import { Field, InputType } from '@nestjs/graphql';
import { SITUACAO_PRODUTO } from 'src/Arbus/Dominio/comuns/types/TProduto';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../../entities/produto-classificacoa/produto-classificacao-enum';

@InputType()
export class InsProdutoEntraDto {



  @Field()
  produto_grupoId: string;

  @Field()
  produto_sub_grupoId: string;

  @Field()
  sigla_unidade_primariaId: string;

  @Field()
  sigla_unidade_secundariaId: string;

  @Field()
  fator_conversao_primaria: number; 

  @Field()
  ha_segunda_unidade: boolean;

  @Field()
  fator_conversao_secundaria: number; 

  @Field()
  codigo_produto: string;


  @Field()
  codigo_ncm: string;


  @Field()
  codigo_rms: string;


  @Field()
  licenca_anvisa_num: string;


  @Field()
  data_validade_licenca_anvisa: string;


  @Field()
  produto_marcaId: string;


  @Field()
  descricao: string;


  @Field()
  descricao_tecnica: string;


  @Field()
  observacoes: string;


  @Field()
  imagem: string;


  @Field()
  referencia: string; 


  @Field()
  peso_bruto: string;


  @Field()
  peso_liquido: string;


  @Field()
  situacao: SITUACAO_PRODUTO; 


  @Field()
  classificacao: PRODUTO_CLASSIFICACAO_ENUN; 


  @Field()
  temp_max_conservacao: string;


  @Field()
  temp_min_conservacao: string;




}
