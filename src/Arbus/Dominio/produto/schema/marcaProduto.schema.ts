import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class MarcaProdutoSchema extends _BaseObjectTypeSchema {


  @Field()
  titulo: string;


  @Field()
  descricao: string;


}
