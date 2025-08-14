import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from 'src/Arbus/Dominio/comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class InsProdutoGrupoRespostaDto extends _BaseObjectTypeSchema {


  @Field()
  CodigoGrupoProduto: string;


  @Field()
  Descricao: string;


  @Field()
  Imagem: string;


  @Field()
  AlteracaoUsuario: string;


  @Field()
  AlteracaoDataHora: string;


}
