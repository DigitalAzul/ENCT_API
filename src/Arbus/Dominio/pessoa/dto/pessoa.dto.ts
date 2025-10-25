//https://medium.com/@s_malyshev/mapped-types-in-nestjs-writing-cleaner-self-documenting-dtos-e10a6d21e9f4

import { Field, IntersectionType, ObjectType } from '@nestjs/graphql';
import { _BaseEntityComum } from '../../comuns/interfaces/_BaseEntityComum';
import { NaturezaJuridicaDto } from './natureza_juridica.dto';

@ObjectType()
export class PessoaDtoBasico {
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

@ObjectType()
export class PessoaDto extends IntersectionType(
  _BaseEntityComum,
  PessoaDtoBasico,
) { }

// @ObjectType()
// export class PessoaDtoSchema extends IntersectionType(
//   _BaseSchemaComum,

// )

// {

// }