import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';

import { InsProdutoGrupoEntradaDto } from './dto/grupoProduto/ins.produto-grupo.enrtada.dto';
import { InsProdutoGrupoRespostaDto } from './dto/grupoProduto/ins.produto-grupo.resposta.dto';
import { ProdutoDto } from './dto/produto/produto.dto';
import { UpdateProdutoInput } from './dto/produto/update-produto.input';
import { ProdutoService } from './produto.service';

@Resolver(() => ProdutoDto)
export class ProdutoResolver {
  constructor(
    private readonly produtoService: ProdutoService,
    // private readonly produtoGrupoService: ProdutoGrupoService
  ) { }

  @Mutation(() => ProdutoDto)
  InserirNovoProduto(@Args('insProdutoEntraDto') insProdutoEntraDto: InsProdutoEntraDto) {
    console.log("insProdutoEntraDto", insProdutoEntraDto)
    return this.produtoService.inserirProduto(insProdutoEntraDto);
  }

  @Query(() => [ProdutoDto], { name: 'produto' })
  findAll() {
    return [];
  }

  @Query(() => ProdutoDto, { name: 'produto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return {};
  }

  @Mutation(() => ProdutoDto)
  updateProduto(@Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput) {
    return {};
  }

  @Mutation(() => ProdutoDto)
  removeProduto(@Args('id', { type: () => Int }) id: number) {
    return {};
  }

  // **************
  // GRUPO DE PRODUTO
  // **************
  // @Mutation(() => ProdutoDto)
  // inseriNovoGrupoDeProduto(@Args('insProdutoGrupoDto') insProdutoGrupoDto: ProdutoDto) {
  //   return {};//return this.produtoService.inserirGrupoDeProduto(insProdutoGrupoDto);
  // }
  @Mutation(() => InsProdutoGrupoRespostaDto)
  inseriNovoGrupoDeProduto(@Args('insProdutoGrupoDto') createProdutoInput: InsProdutoGrupoEntradaDto) {
    return this.produtoService.inserirGrupoDeProduto(createProdutoInput);
  }
}
