import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';

import { InserirProdutoGrupoRespostaDto } from './dto/grupoProduto/inserirGrupoProdutoResposta.dto';
import { InserirGrupoProdutoDto } from './dto/grupoProduto/inserirGrupoPtoduto.dto';
import { UpdateProdutoInput } from './dto/produto/update-produto.input';
import { InserirSiglaUnidadeMedidaProdutoDto } from './dto/siglaUnidadeMedidaProduto/inserirUnidadeMedidaProdutoDto';


import { InserirMarcaProdutoDto } from './dto/marcaProduto/inserirMarcaProduto.dto';
import { InserirSubGrupoProdutoDto } from './dto/subGrupoProduto/inserirSubGrupoProduto.dto';
import { InserirSubGrupoProdutoRespostaDto } from './dto/subGrupoProduto/inserirSubGrupoProdutoResposta.dto';
import { InserirUnidadeMedidaProdutoDto } from './dto/unidadeMedidaProduto/inserirUnidadeMedidaProduto.dto';
import { GrupoProdutoService } from './grupoProduto.service';
import { MarcaProdutoService } from './marcaProduto.service';
import { ProdutoService } from './produto.service';
import { ClassificacaoProdutoSchema } from './schema/classificacaoProduto.schema';
import { GrupoProdutoSchema } from './schema/grupoProduto.schema';
import { SubGrupoProdutoSchema } from './schema/grupoSubGrupoProduto.schema';
import { MarcaProdutoSchema } from './schema/marcaProduto.schema';
import { ProdutoSchema } from './schema/produto.schema';
import { SiglaUnidadeMedidaProdutoSchema } from './schema/siglaUnidadeMedidaProduto.schema';
import { SituacaoProdutoSchema } from './schema/situacaoProduto.schema';
import { UnidadeMedidaProdutoSchema } from './schema/unidadeMedidaProduto.schema';
import { SiglaUnidadeMedidaProdutoService } from './siglaUnidadeMedidaProduto.service';
import { SubGrupoProdutoService } from './subGrupoProduto.service';
import { UnidadeMedidaProdutoService } from './unidadeMedidaProduto.service';


@Resolver(() => ProdutoSchema)
export class ProdutoResolver {
  constructor(
    private readonly produtoService: ProdutoService,
    // private readonly produtoGrupoService: ProdutoGrupoService
    private readonly siglaUnidadeMedidaProdutoService: SiglaUnidadeMedidaProdutoService,
    private readonly unidadeMedidaProdutoService: UnidadeMedidaProdutoService,
    private readonly marcaProdutoService: MarcaProdutoService,
    private readonly subGrupoProdutoService: SubGrupoProdutoService,
    private readonly grupoProdutoService: GrupoProdutoService
  ) { }

  @Mutation(() => ProdutoSchema)
  Produto_Novo(@Args('insProdutoEntraDto') insProdutoEntraDto: InsProdutoEntraDto) {
    console.log("insProdutoEntraDto", insProdutoEntraDto)
    return this.produtoService.inserirProduto(insProdutoEntraDto);
  }

  @Query(() => [ProdutoSchema], { name: 'Produtos' })
  todos() {
    return this.produtoService.ObterTodosProdutos()
  }

  @Query(() => ProdutoSchema, { name: 'Produto_PorID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return {};
  }

  @Mutation(() => ProdutoSchema)
  Produto_Edicao(@Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput) {
    return {};
  }

  @Mutation(() => ProdutoSchema)
  Produto_Remover(@Args('id', { type: () => Int }) id: number) {
    return {};
  }






  // **************
  // GRUPO DE PRODUTO
  // **************
  @Mutation(() => InserirProdutoGrupoRespostaDto)
  Produto_Grupo_Novo(@Args('insProdutoGrupoDto') insProdutoGrupoInput: InserirGrupoProdutoDto) {
    return this.grupoProdutoService.create(insProdutoGrupoInput);
  }
  @Query(() => [GrupoProdutoSchema], { name: 'Produto_Grupos', nullable: true })
  async findManyGrupoProduto() {
    return await this.grupoProdutoService.findMany();
  }



  // **************
  // SUB GRUPO DE PRODUTO
  // **************
  @Mutation(() => InserirSubGrupoProdutoRespostaDto)
  Produto_SubGrupo_Novo(@Args('inserirSubGrupoProdutoDto') subGrupoProdutoGrupoInput: InserirSubGrupoProdutoDto) {
    return this.subGrupoProdutoService.create(subGrupoProdutoGrupoInput);
  }
  @Query(() => [SubGrupoProdutoSchema], { name: 'Produto_SubGrupos', nullable: true })
  async findManySubGrupoProduto() {
    return await this.subGrupoProdutoService.findMany();
  }







  // **************
  // SIGLA UNIDADE DE MEDIDA DE PRODUTO
  // **************

  @Mutation(() => SiglaUnidadeMedidaProdutoSchema)
  CriarNovaSiglaDeUnidadeDeMedidaDeProduto(@Args('InserirSiglaUnidadeMedidaProdutoDto') inserirSiglaUnidadeMedidaProdutoInput: InserirSiglaUnidadeMedidaProdutoDto) {
    return this.siglaUnidadeMedidaProdutoService.create(inserirSiglaUnidadeMedidaProdutoInput);
  }

  @Query(() => SiglaUnidadeMedidaProdutoSchema, { name: 'ListarSiglaUnidadeMedidaDeProduto', nullable: true })
  async findOneSiglaUnidadeMedidaProduto(@Args('_id', { type: () => String }) _id: string) {
    return await this.siglaUnidadeMedidaProdutoService.findOneById(_id);

  }
  @Query(() => [SiglaUnidadeMedidaProdutoSchema], { name: 'ListarTodasSiglasUnidadeMedidaDeProduto', nullable: true })
  async findManySiglaUnidadeMedidaProduto() {
    async function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    return await this.siglaUnidadeMedidaProdutoService.findMany();

  }






  // **************
  // UNIDADE DE MEDIDA DE PRODUTO
  // **************
  @Mutation(() => UnidadeMedidaProdutoSchema)
  CriarNovaUnidadeMedidaProduto(@Args('InserirUnidadeMedidaProdutoDto') inserirUnidadeMedidaProdutoInput: InserirUnidadeMedidaProdutoDto) {
    return this.unidadeMedidaProdutoService.create(inserirUnidadeMedidaProdutoInput);
  }
  @Query(() => [UnidadeMedidaProdutoSchema], { name: 'UnidadesMedidaProduto', nullable: true })
  async findManyUnidadesMedidaProduto() {
    return await this.unidadeMedidaProdutoService.findMany();
  }



  // **************
  // MARCA PRODUTO
  // **************
  @Mutation(() => MarcaProdutoSchema)
  CriarNovaMarcaDeProduto(@Args('InserirMarcaProdutoDto') inserirMarcaProdutoDto: InserirMarcaProdutoDto) {
    return this.marcaProdutoService.create(inserirMarcaProdutoDto);
  }
  @Query(() => [MarcaProdutoSchema], { name: 'Produto_Marcas', nullable: true })
  async findManyMarcaProduto() {
    return await this.marcaProdutoService.findMany();
  }


  // **************
  // SITUACAO PRODUTO
  // **************
  @Query(() => [SituacaoProdutoSchema], { name: 'Produto_Situacao' })
  async findSituacaoProduto() {
    return await this.produtoService.situacaoProduto();
  }

  // **************
  // CLASSIFICACAO PRODUTO
  // **************
  @Query(() => [ClassificacaoProdutoSchema], { name: 'Produto_Classificacao' })
  async findClassificacaoProduto() {
    return await this.produtoService.classificacaoProduto();
  }

}
