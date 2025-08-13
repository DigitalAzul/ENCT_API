import { Field, InputType } from '@nestjs/graphql';
import { _IDdto } from '../../../comuns/interfaces/_ID.dto';



@InputType()
export class InsProdutoGrupoEntradaDto extends _IDdto {


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
