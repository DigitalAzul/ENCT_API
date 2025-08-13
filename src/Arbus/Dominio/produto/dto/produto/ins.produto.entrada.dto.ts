import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InsProdutoEntraDto {

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
  grupo_produto_id: string;


  @Field()
  sub_grupo_produto_id: string;


  @Field()
  marca_produto_id: string;


  @Field()
  descricao: string;


  @Field()
  descricao_tecnica: string;


  @Field()
  observacoes: string;


  @Field()
  imagem: string;


  @Field()
  referencia: string; // perguntar


  @Field()
  peso_bruto: string;


  @Field()
  peso_liquido: string;


  @Field()
  situacao: string;


  @Field()
  tipo_produto: string;


  @Field()
  temp_max_conservacao: string;


}
