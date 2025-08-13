import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InserirNovoUsuarioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
