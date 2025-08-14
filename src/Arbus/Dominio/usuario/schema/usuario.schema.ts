import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';

@ObjectType()
export class UsuarioDto extends _BaseObjectTypeSchema {

  @Field()
  pnome: string;


  @Field()
  snome: string;


  @Field()
  role: string;


}
