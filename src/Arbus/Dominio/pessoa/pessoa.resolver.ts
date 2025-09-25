import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';

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
}
