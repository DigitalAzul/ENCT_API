import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class InserirSubGrupoProdutoRespostaDto extends _BaseObjectTypeSchema {


    @Field()
    titulo: string;

    @Field()
    descricao: string;


    @Field()
    grupo_produtoId: string;



}