import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';
import { SiglaUnidadeMedidaProdutoSchema } from './siglaUnidadeMedidaProduto.schema';



@ObjectType()
export class UnidadeMedidaProdutoSchema extends _BaseObjectTypeSchema {


  @Field()
  sigla_primaria: SiglaUnidadeMedidaProdutoSchema

  @Field()
  sigla_unidade_primariaId: string;


  @Field()
  sigla_secundaria: SiglaUnidadeMedidaProdutoSchema

  @Field()
  sigla_unidade_secundariaId: string;


  @Field()
  descricao: string;

  @Field()
  fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria


  @Field()
  ha_segunda_unidade: boolean;


  @Field()
  fator_conversao_secundaria: number; // define o valor de multiplacação entre unidades secundaria


}
