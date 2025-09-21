import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';

import { InsProdutoGrupoEntradaDto } from './dto/grupoProduto/ins.produto-grupo.entrada.dto';
import { InsProdutoGrupoRespostaDto } from './dto/grupoProduto/ins.produto-grupo.resposta.dto';
import { UpdateProdutoInput } from './dto/produto/update-produto.input';
import { ProdutoService } from './produto.service';
import { ProdutoSchema } from './schema/produto.schema';

@Resolver(() => ProdutoSchema)
export class ProdutoResolver {
  constructor(
    private readonly produtoService: ProdutoService,
    // private readonly produtoGrupoService: ProdutoGrupoService
  ) { }

  @Mutation(() => ProdutoSchema)
  InserirNovoProduto(@Args('insProdutoEntraDto') insProdutoEntraDto: InsProdutoEntraDto) {
    console.log("insProdutoEntraDto", insProdutoEntraDto)
    return this.produtoService.inserirProduto(insProdutoEntraDto);
  }

  @Query(() => [ProdutoSchema], { name: 'produto' })
  findAll() {
    return [];
  }

  @Query(() => ProdutoSchema, { name: 'produto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return {};
  }

  @Mutation(() => ProdutoSchema)
  updateProduto(@Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput) {
    return {};
  }

  @Mutation(() => ProdutoSchema)
  removeProduto(@Args('id', { type: () => Int }) id: number) {
    return {};
  }

  // **************
  // GRUPO DE PRODUTO
  // **************
  // @Mutation(() => ProdutoSchema)
  // inseriNovoGrupoDeProduto(@Args('insProdutoGrupoDto') insProdutoGrupoDto: ProdutoSchema) {
  //   return {};//return this.produtoService.inserirGrupoDeProduto(insProdutoGrupoDto);
  // }
  @Mutation(() => InsProdutoGrupoRespostaDto)
  inseriNovoGrupoDeProduto(@Args('insProdutoGrupoDto') createProdutoInput: InsProdutoGrupoEntradaDto) {
    return this.produtoService.inserirGrupoDeProduto(createProdutoInput);
  }
}
