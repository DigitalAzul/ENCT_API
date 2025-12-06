import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../../comuns/interfaces/_BaseSchemaType';


@InputType()
export class MarcaProdutoBASE {

    @Field()
    titulo: string;

    @Field()
    descricao: string;

}


@InputType()
export class InserirMarcaProdutoDto extends _BaseObjectTypeSchema {


    @Field()
    titulo: string;

    @Field()
    descricao: string;


}

@InputType()
export class MarcaProdutoArgs extends PartialType(MarcaProdutoBASE) { }