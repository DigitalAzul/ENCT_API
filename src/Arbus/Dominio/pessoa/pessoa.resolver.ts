import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';

import { UpdatePessoaInputDto } from './dto/alt.pessoa.input.dto';
import { PessoaDto } from './dto/pessoa.dto';
import { PessoaService } from './pessoa.service';

@Resolver(() => PessoaDto)
export class PessoaResolver {
  constructor(private readonly pessoaService: PessoaService) { }

  @Mutation(() => PessoaDto)
  InserirPessoa(@Args('inserirPessoaInput') inserirPessoaInput: InserirPessoaInputDto) {
    console.log('inserirPessoaInput', inserirPessoaInput)
    return this.pessoaService.create(inserirPessoaInput);
  }

  @Query(() => [PessoaDto], { name: 'pessoas' })
  findAll() {
    return this.pessoaService.findAll();
  }

  @Query(() => PessoaDto, { name: 'pessoa' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.pessoaService.findOne(id);
  }

  @Mutation(() => PessoaDto)
  updateMercador(@Args('updatePessoaInput') updatePessoaInput: UpdatePessoaInputDto) {
    return this.pessoaService.update(updatePessoaInput.id, updatePessoaInput);
  }

  @Mutation(() => PessoaDto)
  removePessoa(@Args('id', { type: () => String }) id: string) {
    return this.pessoaService.remove(id);
  }
}
