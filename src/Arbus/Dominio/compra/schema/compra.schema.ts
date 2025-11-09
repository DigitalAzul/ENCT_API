import { Field, ObjectType } from "@nestjs/graphql";
import { _BaseObjectTypeSchema } from "../../comuns/interfaces/_BaseSchemaType";
import { ProdutoSchema } from "../../produto/schema/produto.schema";




@ObjectType()
export class CompraSchema extends _BaseObjectTypeSchema {

    @Field()
    produtos: ProdutoSchema

    @Field()
    produtoId: string;

    @Field()
    quantidade: number;


    @Field()
    valor_esperado: number;


    @Field()
    valor_negociado: number;


    @Field()
    desconto: number;


    @Field()
    valor_total: number;

}