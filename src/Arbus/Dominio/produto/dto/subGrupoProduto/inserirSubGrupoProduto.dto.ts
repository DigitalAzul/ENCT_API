import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../../comuns/interfaces/_BaseSchemaType';


@InputType()
export class SubGrupoProdutoDto extends _BaseObjectTypeSchema {

    @Field()
    titulo: string;

    @Field()
    descricao: string;


}

@InputType()
export class InserirSubGrupoProdutoArgs {

    @Field()
    titulo: string;

    @Field()
    descricao: string;
}

@InputType()
export class UpdateSubGrupoProdutoArgs extends PartialType(InserirSubGrupoProdutoArgs) { }
