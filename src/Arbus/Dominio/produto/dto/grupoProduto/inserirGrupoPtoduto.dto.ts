import { Field, InputType, PartialType } from "@nestjs/graphql";
import { _BaseObjectType } from "../../../comuns/interfaces/_BaseObjectType";

@InputType()
export class InserirGrupoProdutoDto extends _BaseObjectType {
  @Field()
  titulo: string;

  @Field()
  descricao: string;
}

@InputType()
export class cadProdutoGrupoArgs {
  @Field()
  titulo: string;

  @Field()
  descricao: string;
}

@InputType()
export class EditaGrupoProdutoArgs extends PartialType(
  InserirGrupoProdutoDto,
) {}
