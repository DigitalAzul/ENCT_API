import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';

import { InserirProdutoGrupoRespostaDto } from './dto/grupoProduto/inserirGrupoProdutoResposta.dto';
import { EditaGrupoProdutoArgs, InserirGrupoProdutoArgs } from './dto/grupoProduto/inserirGrupoPtoduto.dto';
import { UpdateProdutoInput } from './dto/produto/update-produto.input';
import { InserirSiglaUnidadeMedidaProdutoDto, SiglaUnidadeMedidaProdutoEditaArgs } from './dto/siglaUnidadeMedidaProduto/inserirUnidadeMedidaProdutoDto';


import { MarcaProdutoArgs } from './dto/marcaProduto/inserirMarcaProduto.dto';
import { InserirSubGrupoProdutoArgs, UpdateSubGrupoProdutoArgs } from './dto/subGrupoProduto/inserirSubGrupoProduto.dto';
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
import { SiglaUnidadeMedidaProdutoService } from './siglaUnidadeMedidaProduto.service';
import { SubGrupoProdutoService } from './subGrupoProduto.service';


@Resolver(() => ProdutoSchema)
export class ProdutoResolver {
  constructor(
    private readonly produtoService: ProdutoService,
    // private readonly produtoGrupoService: ProdutoGrupoService
    private readonly siglaUnidadeMedidaProdutoService: SiglaUnidadeMedidaProdutoService,
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
  async todos() {
    console.log('asdasdasdasd')
    return await this.produtoService.ObterTodosProdutos()
  }

  @Query(() => ProdutoSchema, { name: 'Produto_PorID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return {};
  }

  @Mutation(() => ProdutoSchema)
  async Produto_Edicao(@Args('id', { type: () => String, name: 'id' }) id: string, @Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput) {

    return await this.produtoService.update(id, updateProdutoInput)
  }

  @Mutation(() => ProdutoSchema)
  Produto_Remover(@Args('id', { type: () => Int }) id: number) {
    return {};
  }






  // **************
  // GRUPO DE PRODUTO
  // **************
  @Mutation(() => InserirProdutoGrupoRespostaDto)
  Produto_Grupo_Novo(@Args('insProdutoGrupoDto') insProdutoGrupoInput: InserirGrupoProdutoArgs) {
    return this.grupoProdutoService.create(insProdutoGrupoInput);
  }
  @Query(() => [GrupoProdutoSchema], { name: 'Produto_Grupos', nullable: true })
  async findManyGrupoProduto() {
    return await this.grupoProdutoService.findMany();
  }
  @Mutation(() => Boolean)
  async ProdutoGrupo_Edicao(@Args('id') id: string, @Args('dados') dados: EditaGrupoProdutoArgs) {

    return await this.grupoProdutoService.update(id, dados)
  }


  // **************
  // SUB GRUPO DE PRODUTO
  // **************
  @Mutation(() => Boolean)
  Produto_SubGrupo_Novo(@Args('inserirSubGrupoProdutoArgs') inserirSubGrupoProdutoArgs: InserirSubGrupoProdutoArgs) {
    return this.subGrupoProdutoService.create(inserirSubGrupoProdutoArgs);
  }
  @Mutation(() => Boolean)
  async ProdutoSubGrupo_Edicao(@Args('id') id: string, @Args('dados') dados: UpdateSubGrupoProdutoArgs) {

    return await this.subGrupoProdutoService.update(id, dados)
  }
  @Query(() => [SubGrupoProdutoSchema], { name: 'Produto_SubGrupos', nullable: true })
  async findManySubGrupoProduto() {
    return await this.subGrupoProdutoService.findMany();
  }




  // **************
  // SIGLA UNIDADE DE MEDIDA DE PRODUTO
  // **************

  @Mutation(() => Boolean)
  async CriarNovaSiglaDeUnidadeDeMedidaDeProduto(@Args('InserirSiglaUnidadeMedidaProdutoDto') inserirSiglaUnidadeMedidaProdutoInput: InserirSiglaUnidadeMedidaProdutoDto) {
    return await this.siglaUnidadeMedidaProdutoService.create(inserirSiglaUnidadeMedidaProdutoInput);
  }
  @Mutation(() => Boolean)
  async SiglaDeUnidadeDeMedidaDeProduto_Edicao(@Args('id') id: string, @Args('dados') dados: SiglaUnidadeMedidaProdutoEditaArgs) {

    return await this.siglaUnidadeMedidaProdutoService.update(id, dados)
  }
  @Query(() => SiglaUnidadeMedidaProdutoSchema, { name: 'ListarSiglaUnidadeMedidaDeProduto', nullable: true })
  async findOneSiglaUnidadeMedidaProduto(@Args('_id', { type: () => String }) _id: string) {
    return await this.siglaUnidadeMedidaProdutoService.findOneById(_id);

  }
  @Query(() => [SiglaUnidadeMedidaProdutoSchema], { name: 'TodasSiglasUnidadeMedidaDeProduto', nullable: true })
  async findManySiglaUnidadeMedidaProduto() {
    async function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    return await this.siglaUnidadeMedidaProdutoService.findMany();

  }


  // **************
  // MARCA PRODUTO
  // **************
  @Mutation(() => Boolean)
  CriarNovaMarcaDeProduto(@Args('InserirMarcaProdutoDto') inserirMarcaProdutoDto: MarcaProdutoArgs) {
    return this.marcaProdutoService.create(inserirMarcaProdutoDto);
  }
  @Query(() => [MarcaProdutoSchema], { name: 'Produto_Marcas', nullable: true })
  async findManyMarcaProduto() {
    return await this.marcaProdutoService.findMany();
  }
  @Mutation(() => Boolean)
  async MarcaDeProduto_Edicao(@Args('id') id: string, @Args('dados') dados: MarcaProdutoArgs) {

    return await this.marcaProdutoService.update(id, dados)
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
