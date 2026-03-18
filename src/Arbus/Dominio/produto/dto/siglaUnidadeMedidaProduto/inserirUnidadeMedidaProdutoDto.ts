import { Field, InputType, PartialType } from "@nestjs/graphql";
import { _BaseObjectType } from "../../../comuns/interfaces/_BaseObjectType";

@InputType()
export class InserirSiglaUnidadeMedidaProdutoDto extends _BaseObjectType {
  @Field()
  sigla: string;

  @Field()
  descricao: string;
}
@InputType()
export class cadProdutoSiglaUnidadeMedidaArgs {
  @Field()
  sigla: string;

  @Field()
  descricao: string;
}

@InputType()
export class SiglaUnidadeMedidaProdutoEditaArgs extends PartialType(
  cadProdutoSiglaUnidadeMedidaArgs,
) {}
