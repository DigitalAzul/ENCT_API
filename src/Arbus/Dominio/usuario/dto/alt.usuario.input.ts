import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { InserirNovoUsuarioInput } from './ins.usuario.input';

@InputType()
export class UpdateUsuarioInput extends PartialType(InserirNovoUsuarioInput) {
  @Field(() => Int)
  id: number;
}
