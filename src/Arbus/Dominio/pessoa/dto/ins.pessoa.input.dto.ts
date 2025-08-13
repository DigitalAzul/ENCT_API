import { Field, InputType } from '@nestjs/graphql';
import { _IDdto } from '../../comuns/interfaces/_ID.dto';

@InputType()
export class InserirPessoaInputDto extends _IDdto {


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
