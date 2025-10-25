import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class SubGrupoProdutoSchema extends _BaseObjectTypeSchema {


  @Field()
  titulo: string;


  @Field()
  descricao: string;


}
