import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class _BaseSchemaComum {

    @Field({ nullable: true })
    _id: string;

    @Field({ nullable: true })
    _criado_em: Date;

    @Field({ nullable: true })
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

