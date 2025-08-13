import { Field, ObjectType } from '@nestjs/graphql';
import { _IDdto } from '../../comuns/interfaces/_ID.dto';

@ObjectType()
export class ContatoDto extends _IDdto {

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