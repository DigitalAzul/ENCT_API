import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeDto } from '../../comuns/interfaces/_BaseObjectType ';



@ObjectType()
export class NaturezaJuridicaDto extends _BaseObjectTypeDto {

  @Field()
  titulo: string

}