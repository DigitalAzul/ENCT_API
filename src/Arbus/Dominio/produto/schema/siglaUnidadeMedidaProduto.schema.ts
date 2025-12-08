import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';



@ObjectType()
export class SiglaUnidadeMedidaProdutoSchema extends _BaseObjectType {


  @Field()
  sigla: string;


  @Field()
  descricao: string;


}
