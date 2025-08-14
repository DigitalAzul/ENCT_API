import { Field, InputType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';

@InputType()
export class InserirPessoaInputDto extends _BaseObjectTypeSchema {


  @Field()
  filial: boolean;


  @Field()
  razao_social: string;


  @Field()
  nome_fantasia: string;


  @Field()
  cnpj_cpf: string;


  @Field()
  inscricao_estadual: string;


  @Field()
  pessoa_juridica: boolean;


  @Field()
  tipo_natureza_juridica_id: string;


  @Field()
  cnae: string;
}
