import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class _BaseEntityComum {

    @Field({ nullable: true })
    _id: string;

    @Field()
    _criado_em: Date;

    @Field()
    _criado_por_id: string;


    @Field({ nullable: true })
    _atualizado_em: Date;


    @Field({ nullable: true })
    _atualizado_por_id?: string;


    @Field({ nullable: true })
    _excluido_em: Date


    @Field({ nullable: true })
    _excluido_por_id?: string;
}

