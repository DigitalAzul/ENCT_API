
import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';
import { SiglaUnidadeMedidaProdutoSchema } from '../../schema/siglaUnidadeMedidaProduto.schema';



@ObjectType()
export class InserirUnidadeMedidaProdutoRespostaDto extends _BaseObjectTypeSchema {


    @Field()
    titulo: string;


    @Field()
    Descricao: string;


    @Field()
    sigla_primaria: SiglaUnidadeMedidaProdutoSchema

    @Field()
    sigla_unidade_primariaId: string;

    sigla_secundaria: SiglaUnidadeMedidaProdutoSchema

    @Field()
    sigla_unidade_secundariaId: string;

    @Field()
    fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria


    @Field()
    ha_segunda_unidade: boolean;


    @Field()
    fator_conversao_secundaria: number; // define o valor de multiplacação entre unidades secundaria




}
