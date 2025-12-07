import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';

@ObjectType()
export class EnderecoDto extends _BaseEntity {

    @Field()
    titulo: string;

    @Field()
    nome: string;
}