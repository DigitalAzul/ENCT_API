import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { InsProdutoEntraDto } from './ins.produto.entrada.dto';

@InputType()
export class UpdateProdutoInput extends PartialType(InsProdutoEntraDto) {
  @Field(() => Int)
  id: number;
}
