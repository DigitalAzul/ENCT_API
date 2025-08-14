import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';

@ObjectType()
export class ContatoDto extends _BaseObjectTypeSchema {

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