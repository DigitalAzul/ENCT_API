import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectType } from '../../../comuns/interfaces/_BaseObjectType';


@InputType()
export class MarcaProdutoBASE {

    @Field()
    titulo: string;

    @Field()
    descricao: string;

}


@InputType()
export class InserirMarcaProdutoDto extends _BaseObjectType {


    @Field()
    titulo: string;

    @Field()
    descricao: string;


}

@InputType()
export class MarcaProdutoArgs extends PartialType(MarcaProdutoBASE) { }