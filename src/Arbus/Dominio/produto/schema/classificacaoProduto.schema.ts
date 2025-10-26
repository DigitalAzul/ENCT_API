import { Field, ObjectType } from '@nestjs/graphql';



@ObjectType()
export class ClassificacaoProdutoSchema {


  @Field()
  value: string;


  @Field()
  label: string;


}
