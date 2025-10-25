import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';

import { _Filtering, _Pagination, _Sorting } from '../comuns/paginacao/paginationParams';
import { PaginatedResponse } from '../comuns/paginacao/returnDTO';
import { UpdatePessoaInputDto } from './dto/alt.pessoa.input.dto';
import { PessoaDto } from './dto/pessoa.dto';
import { PessoaService } from './pessoa.service';

@Resolver(() => PessoaDto)
export class PessoaResolver {
  constructor(private readonly pessoaService: PessoaService) { }

  @Mutation(() => PessoaDto)
  CriarNovaPessoa(@Args('inserirPessoaInput') inserirPessoaInput: InserirPessoaInputDto) {
    console.log('inserirPessoaInput', inserirPessoaInput)
    return this.pessoaService.create(inserirPessoaInput);
  }

  //
  // FALTA O QUERY BUILDER
  // https://dev.to/mgustus/filtering-graphql-query-using-typescript-and-typeorm-2l49
  //

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

  @Query(() => PaginatedResponse, { name: 'Paginacao' })
  Paginar(
    @Args('PaginationParams', { type: () => _Pagination }) pagination: _Pagination,
    @Args('SortingParams', { type: () => _Sorting }) sort: _Sorting,
    @Args('FilteringParams', { type: () => _Filtering }) filter: _Filtering,
  ) {
    console.log(pagination, sort, filter)
    return this.pessoaService.paginacao(pagination, sort, filter);
  }
}
