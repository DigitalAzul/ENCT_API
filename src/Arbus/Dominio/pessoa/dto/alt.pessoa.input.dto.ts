import { Field, InputType, PartialType } from '@nestjs/graphql';
import { InserirPessoaInputDto } from './ins.pessoa.input.dto';

@InputType()
export class UpdatePessoaInputDto extends PartialType(InserirPessoaInputDto) {
  @Field(() => String)
  id: string;
}
