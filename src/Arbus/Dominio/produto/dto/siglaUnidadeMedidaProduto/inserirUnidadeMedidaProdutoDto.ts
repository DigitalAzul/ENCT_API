import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../../comuns/interfaces/_BaseSchemaType';



@InputType()
export class InserirSiglaUnidadeMedidaProdutoDto extends _BaseObjectTypeSchema {

    @Field()
    sigla: string;


    @Field()
    descricao: string;

}
@InputType()
export class SiglaUnidadeMedidaProdutoArgs {

    @Field()
    sigla: string;


    @Field()
    descricao: string;

}


@InputType()
export class SiglaUnidadeMedidaProdutoEditaArgs extends PartialType(SiglaUnidadeMedidaProdutoArgs) { }
