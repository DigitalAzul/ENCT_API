import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';

@ObjectType()
export class EnderecoDto extends _BaseEntityType {

    @Field()
    titulo: string;

    @Field()
    nome: string;
}