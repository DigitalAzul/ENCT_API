import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrigemProdutoSchema {
  @Field()
  value: string;

  @Field()
  label: string;
}
