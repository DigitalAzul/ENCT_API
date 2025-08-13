import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeDto } from '../../comuns/interfaces/_BaseObjectType ';
import { NaturezaJuridicaDto } from './natureza_juridica.dto';

@ObjectType()
export class PessoaDto extends _BaseObjectTypeDto {


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
  tipo_natureza_juridica: NaturezaJuridicaDto;


  @Field()
  cnae: string;
}
