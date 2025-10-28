import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class InserirProdutoGrupoRespostaDto extends _BaseObjectTypeSchema {


  @Field()
  titulo: string;


  @Field()
  descricao: string;



}
