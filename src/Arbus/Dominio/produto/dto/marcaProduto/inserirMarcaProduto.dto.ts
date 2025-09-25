import { Field, InputType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@InputType()
export class InserirMarcaProdutoDto extends _BaseObjectTypeSchema {


    @Field()
    titulo: string;

    @Field()
    descricao: string;


}