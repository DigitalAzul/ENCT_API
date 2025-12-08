import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';

@ObjectType()
export class ContatoDto extends _BaseObjectType {

    @Field()
    mercador_id: string;

    @Field()
    tipo: "TELEFONE" | "EMAIL" | "WEB" | "SOCIAL"

    @Field()
    ddd: string;

    @Field()
    numero: string;

    @Field()
    email: string;

    @Field()
    web: string;

    @Field()
    social: string;
}