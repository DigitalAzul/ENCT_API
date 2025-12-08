import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';

@ObjectType()
export class UsuarioDto extends _BaseObjectType {

  @Field()
  pnome: string;


  @Field()
  snome: string;


  @Field()
  role: string;


}
