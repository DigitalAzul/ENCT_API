import { Field, InputType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@InputType()
export class InsProdutoGrupoEntradaDto extends _BaseObjectTypeSchema {


  @Field()
  titulo: string;


  @Field()
  descricao: string;


  // @Field()
  // AlteracaoUsuario: string;


  // @Field()
  // AlteracaoDataHora: string;


}
