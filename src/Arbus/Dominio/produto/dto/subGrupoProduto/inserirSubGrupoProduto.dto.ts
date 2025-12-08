import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../../comuns/interfaces/_BaseObjectType';


@InputType()
export class SubGrupoProdutoDto extends _BaseObjectType {

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
