import { CreateCompraInput } from './create-compra.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompraInput extends PartialType(CreateCompraInput) {
  @Field(() => Int)
  id: number;
}
