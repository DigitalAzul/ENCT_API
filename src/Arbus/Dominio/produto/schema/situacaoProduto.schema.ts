import { Field, ObjectType } from '@nestjs/graphql';



@ObjectType()
export class SituacaoProdutoSchema {


  @Field()
  value: string;


  @Field()
  label: string;


}
