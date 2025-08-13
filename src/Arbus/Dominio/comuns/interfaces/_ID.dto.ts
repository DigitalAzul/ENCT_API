import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class _IDdto {
    @Field({ nullable: true })
    id: string;

    @Field()
    criado_em: Date;

    @Field()
    criado_por_id: string;


    @Field({ nullable: true })
    atualizado_em: Date;


    @Field({ nullable: true })
    atualizado_por_id?: string;
}

