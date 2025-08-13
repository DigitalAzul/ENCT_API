import { Field, ObjectType } from '@nestjs/graphql';
import { _IDdto } from '../../../comuns/interfaces/_ID.dto';



@ObjectType()
export class InsProdutoGrupoRespostaDto extends _IDdto {


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
