import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../../comuns/interfaces/_BaseObjectType';



@ObjectType()
export class InserirSubGrupoProdutoRespostaDto extends _BaseObjectType {


    @Field()
    titulo: string;

    @Field()
    descricao: string;


    @Field()
    grupo_produtoId: string;



}