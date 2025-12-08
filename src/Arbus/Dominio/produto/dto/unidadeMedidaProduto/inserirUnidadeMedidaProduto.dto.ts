import { Field, InputType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../../comuns/interfaces/_BaseObjectType';



@InputType()
export class InserirUnidadeMedidaProdutoDto extends _BaseObjectType {


    @Field()
    sigla_unidade_primariaId: string;


    @Field()
    sigla_unidade_secundariaId: string;


    @Field()
    titulo: string;


    @Field()
    descricao: string;


    @Field()
    fator_conversao_primaria: GLfloat;


    @Field()
    ha_segunda_unidade: boolean;



    @Field()
    fator_conversao_secundaria: GLfloat;




}
