import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';

import { UpdatePessoaInputDto } from './dto/alt.pessoa.input.dto';
import { EnderecoTipoArgs, EnderecoTipoDto } from './entities/endereco-tipo.entity';
import { EnderecoArgs, EnderecoDto } from './entities/endereco.entity';
import { NaturezaJuridicaArgs, NaturezaJuridicaRespostaDto } from './entities/natureza_juridica.entity';
import { PessoaDto } from './entities/pessoa.entity';
import { PessoaService } from './pessoa.service';

@Resolver(() => PessoaDto)
export class PessoaResolver {
  constructor(private readonly pessoaService: PessoaService) { }

  @Mutation(() => Boolean, { name: 'CAD_PessoaFJ' })
  CriarNovaPessoa(@Args('inserirPessoaInput') inserirPessoaInput: InserirPessoaInputDto) {
    console.log('inserirPessoaInput', inserirPessoaInput)
    return this.pessoaService.create(inserirPessoaInput);
  }

 

  @Query(() => [PessoaDto], { name: 'ListarTodasPessoas' })
  findAll() {
    return this.pessoaService.findAll();
  }

  @Query(() => PessoaDto, { name: 'ListarPessoaPeloID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.pessoaService.findOne(id);
  }

  @Mutation(() => PessoaDto)
  AtualizeEstaPessoa(@Args('_id', { type: () => String }) _id: string, @Args('updatePessoaInput') updatePessoaInput: UpdatePessoaInputDto) {
    return this.pessoaService.update(_id, updatePessoaInput);
  }

  @Mutation(() => PessoaDto)
  RemovaEstaPessoa(@Args('id', { type: () => String }) id: string) {
    return this.pessoaService.remove(id);
  }



  //
  // NATUREZA JURIDICA
  //
  @Mutation(() => Boolean, { name: 'CAD_NaturezaJuridica' })
  NATUREZA_EXEC_1(@Args('args') args: NaturezaJuridicaArgs) {
    console.log('CAD endereco', args)
    return this.pessoaService.semearNATJUR();
  }
  @Query(() => [NaturezaJuridicaRespostaDto], { name: 'LST_NaturezaJuridica' })
  NATUREZA_EXEC_2() {
    return this.pessoaService.naturezaJuridicaLista();
  }
  //
  // NATUREZA JURIDICA
  //


  //
  // ENDERECOS
  //
  @Mutation(() => Boolean, { name: 'CAD_Endereco' })
  ENDERECO_EXEC_1(@Args('args') args: EnderecoArgs) {
    console.log('CAD endereco', args)
    return this.pessoaService.enderecoCreate(args);
  }

  @Query(() => [EnderecoDto], { name: 'LST_EnderecosPorPessoaID' })
  ENDERECO_EXEC_2(@Args('id', { type: () => String }) id: string) {
    return this.pessoaService.findOne(id);
  }

  // **************************************************
  // **** TIPO ****************************************
  // **************************************************

  @Mutation(() => Boolean, { name: 'CAD_TopoEndereco' })
  ENDERECO_EXEC_3(@Args('args') args: EnderecoTipoArgs) {
    console.log('CAD endereco', args)
    return this.pessoaService.enderecoTipoCreate(args);
  }
  @Query(() => [EnderecoTipoDto], { name: 'LST_TiposEndereco' })
  ENDERECO_EXEC_4() {
    return this.pessoaService.enderecoTipoLista();
  }
  // **************************************************
  // **** TIPO ****************************************
  // **************************************************

  //
  // ENDERECOS
  //


  //
  // FALTA O QUERY BUILDER
  // https://dev.to/mgustus/filtering-graphql-query-using-typescript-and-typeorm-2l49
  //

  
  // @Query(() => PaginatedResponse, { name: 'Paginacao' })
  // Paginar(
  //   @Args('PaginationParams', { type: () => _Pagination }) pagination: _Pagination,
  //   @Args('SortingParams', { type: () => _Sorting }) sort: _Sorting,
  //   @Args('FilteringParams', { type: () => _Filtering }) filter: _Filtering,
  // ) {
  //   console.log(pagination, sort, filter)
  //   return this.pessoaService.paginacao(pagination, sort, filter);
  // }

}


