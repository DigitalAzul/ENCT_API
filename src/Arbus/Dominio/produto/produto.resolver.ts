import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { cadProdutoDto } from "./dto/produto/ins.produto.entrada.dto";

import {
  cadProdutoGrupoArgs,
  EditaGrupoProdutoArgs,
} from "./dto/grupoProduto/inserirGrupoPtoduto.dto";
import { UpdateProdutoInput } from "./dto/produto/update-produto.input";
import {
  cadProdutoSiglaUnidadeMedidaArgs,
  SiglaUnidadeMedidaProdutoEditaArgs,
} from "./dto/siglaUnidadeMedidaProduto/inserirUnidadeMedidaProdutoDto";

import { cadProdutoMarcaArgs } from "./dto/marcaProduto/inserirMarcaProduto.dto";
import {
  CadSubGrupoProdutoArgs,
  UpdateSubGrupoProdutoArgs,
} from "./dto/subGrupoProduto/inserirSubGrupoProduto.dto";
import { GrupoProdutoService } from "./grupoProduto.service";
import { MarcaProdutoService } from "./marcaProduto.service";
import { ProdutoService } from "./produto.service";
import { ClassificacaoProdutoSchema } from "./schema/classificacaoProduto.schema";
import { GrupoProdutoSchema } from "./schema/grupoProduto.schema";
import { SubGrupoProdutoSchema } from "./schema/grupoSubGrupoProduto.schema";
import { MarcaProdutoSchema } from "./schema/marcaProduto.schema";
import { OrigemProdutoSchema } from "./schema/origemProduto.schema";
import { ProdutoSchema } from "./schema/produto.schema";
import { SiglaUnidadeMedidaProdutoSchema } from "./schema/siglaUnidadeMedidaProduto.schema";
import { SituacaoProdutoSchema } from "./schema/situacaoProduto.schema";
import { SiglaUnidadeMedidaProdutoService } from "./siglaUnidadeMedidaProduto.service";
import { SubGrupoProdutoService } from "./subGrupoProduto.service";

@Resolver(() => ProdutoSchema)
export class ProdutoResolver {
  constructor(
    private readonly produtoService: ProdutoService,
    // private readonly produtoGrupoService: ProdutoGrupoService
    private readonly siglaUnidadeMedidaProdutoService: SiglaUnidadeMedidaProdutoService,
    private readonly marcaProdutoService: MarcaProdutoService,
    private readonly subGrupoProdutoService: SubGrupoProdutoService,
    private readonly grupoProdutoService: GrupoProdutoService,
  ) { }

  @Mutation(() => Boolean, { name: "CAD_Produto" })
  Produto_Novo(@Args("cadProdutoDto") cadProdutoDto: cadProdutoDto) {
    console.log("cadProdutoDto", cadProdutoDto);
    return this.produtoService.inserirProduto(cadProdutoDto);
  }

  @Query(() => [ProdutoSchema], { name: "FLT_Produtos" })
  async produtosFiltrado() {
    console.log("asdasdasdasd");
    return await this.produtoService.ProdutosFiltrado();
  }

  @Query(() => ProdutoSchema, { name: "Produto_PorID" })
  findOne(@Args("id", { type: () => String }) id: string) {
    console.log(id);
    return {};
  }

  @Mutation(() => ProdutoSchema)
  async Produto_Edicao(
    @Args("id", { type: () => String, name: "id" }) id: string,
    @Args("updateProdutoInput") updateProdutoInput: UpdateProdutoInput,
  ) {
    return await this.produtoService.update(id, updateProdutoInput);
  }

  @Mutation(() => Boolean)
  Produto_Remover(@Args("id", { type: () => String }) id: string) {
    console.log(id);
    return {};
  }

  // **************
  // GRUPO DE PRODUTO
  // **************
  @Mutation(() => Boolean, { name: "CAD_ProdutoGrupo" })
  Produto_Grupo_Novo(
    @Args("cadProdutoGrupo") cadProdutoGrupo: cadProdutoGrupoArgs,
  ) {
    return this.grupoProdutoService.create(cadProdutoGrupo);
  }

  @Query(() => [GrupoProdutoSchema], {
    name: "LST_Produto_Grupos",
    nullable: true,
  })
  async findManyGrupoProduto() {
    return await this.grupoProdutoService.findMany();
  }

  @Mutation(() => Boolean)
  async ProdutoGrupo_Edicao(
    @Args("id") id: string,
    @Args("dados") dados: EditaGrupoProdutoArgs,
  ) {
    return await this.grupoProdutoService.update(id, dados);
  }

  // **************
  // SUB GRUPO DE PRODUTO
  // **************
  @Mutation(() => Boolean, { name: "CAD_Produto_SubGrupo" })
  Produto_SubGrupo_Novo(
    @Args("cadSubGrupoProdutoArgs")
    cadSubGrupoProdutoArgs: CadSubGrupoProdutoArgs,
  ) {
    return this.subGrupoProdutoService.create(cadSubGrupoProdutoArgs);
  }

  @Mutation(() => Boolean)
  async ProdutoSubGrupo_Edicao(
    @Args("id") id: string,
    @Args("dados") dados: UpdateSubGrupoProdutoArgs,
  ) {
    return await this.subGrupoProdutoService.update(id, dados);
  }
  @Query(() => [SubGrupoProdutoSchema], {
    name: "Produto_SubGrupos",
    nullable: true,
  })
  async findManySubGrupoProduto() {
    return await this.subGrupoProdutoService.findMany();
  }

  // **************
  // SIGLA UNIDADE DE MEDIDA DE PRODUTO
  // **************

  @Mutation(() => Boolean, { name: "CAD_Produto_Sigla_Unidade_Medida" })
  async CriarNovaSiglaDeUnidadeDeMedidaDeProduto(
    @Args("cadProdutoSiglaUnidadeMedidaArgs")
    cadProdutoSiglaUnidadeMedidaArgs: cadProdutoSiglaUnidadeMedidaArgs,
  ) {
    return await this.siglaUnidadeMedidaProdutoService.create(
      cadProdutoSiglaUnidadeMedidaArgs,
    );
  }
  @Mutation(() => Boolean)
  async SiglaDeUnidadeDeMedidaDeProduto_Edicao(
    @Args("id") id: string,
    @Args("dados") dados: SiglaUnidadeMedidaProdutoEditaArgs,
  ) {
    return await this.siglaUnidadeMedidaProdutoService.update(id, dados);
  }
  @Query(() => SiglaUnidadeMedidaProdutoSchema, {
    name: "ListarSiglaUnidadeMedidaDeProduto",
    nullable: true,
  })
  async findOneSiglaUnidadeMedidaProduto(
    @Args("_id", { type: () => String }) _id: string,
  ) {
    return await this.siglaUnidadeMedidaProdutoService.findOneById(_id);
  }
  @Query(() => [SiglaUnidadeMedidaProdutoSchema], {
    name: "TodasSiglasUnidadeMedidaDeProduto",
    nullable: true,
  })
  async findManySiglaUnidadeMedidaProduto() {
    // async function sleep(ms: number) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    return await this.siglaUnidadeMedidaProdutoService.findMany();
  }

  // **************
  // MARCA PRODUTO
  // **************
  @Mutation(() => Boolean, { name: "CAD_Produto_Marca" })
  CriarNovaMarcaDeProduto(
    @Args("cadProdutoMarcaArgs") cadProdutoMarcaArgs: cadProdutoMarcaArgs,
  ) {
    return this.marcaProdutoService.create(cadProdutoMarcaArgs);
  }
  @Query(() => [MarcaProdutoSchema], { name: "Produto_Marcas", nullable: true })
  async findManyMarcaProduto() {
    return await this.marcaProdutoService.findMany();
  }
  @Mutation(() => Boolean)
  async MarcaDeProduto_Edicao(
    @Args("id") id: string,
    @Args("dados") dados: cadProdutoMarcaArgs,
  ) {
    return await this.marcaProdutoService.update(id, dados);
  }

  // **************
  // SITUACAO PRODUTO
  // **************
  @Query(() => [SituacaoProdutoSchema], { name: "Produto_Situacao" })
  findSituacaoProduto() {
    return this.produtoService.situacaoProduto();
  }

  // **************
  // CLASSIFICACAO PRODUTO
  // **************
  @Query(() => [ClassificacaoProdutoSchema], { name: "Produto_Classificacao" })
  findClassificacaoProduto() {
    return this.produtoService.classificacaoProduto();
  }

  // **************
  // ORIGEM PRODUTO
  // **************
  @Query(() => [OrigemProdutoSchema], { name: "Produto_Origem" })
  findOrigemProduto() {
    return this.produtoService.origemProduto();
  }
}
