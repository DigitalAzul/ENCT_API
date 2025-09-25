import { Field, InputType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@InputType()
export class InserirSiglaUnidadeMedidaProdutoDto extends _BaseObjectTypeSchema {

    @Field()
    sigla: string;


    @Field()
    descricao: string;

}
