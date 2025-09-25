import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class SiglaUnidadeMedidaProdutoSchema extends _BaseObjectTypeSchema {


  @Field()
  sigla: string;


  @Field()
  Descricao: string;


}
