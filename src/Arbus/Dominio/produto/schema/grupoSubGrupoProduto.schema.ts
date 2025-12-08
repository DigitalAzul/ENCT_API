import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';



@ObjectType()
export class SubGrupoProdutoSchema extends _BaseObjectType {


  @Field()
  titulo: string;


  @Field()
  descricao: string;


}
