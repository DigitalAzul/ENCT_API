import { Field, ObjectType } from '@nestjs/graphql';
import { _IDdto } from '../../comuns/interfaces/_ID.dto';

@ObjectType()
export class UsuarioDto extends _IDdto {

  @Field()
  pnome: string;


  @Field()
  snome: string;


  @Field()
  role: string;


}
