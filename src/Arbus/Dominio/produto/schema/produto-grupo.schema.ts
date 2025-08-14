import { Field, ObjectType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../comuns/interfaces/_BaseSchemaType';



@ObjectType()
export class ProdutoGrupoSchema extends _BaseObjectTypeSchema {


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
