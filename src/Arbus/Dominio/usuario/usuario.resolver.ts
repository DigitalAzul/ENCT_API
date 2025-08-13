import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUsuarioInput } from './dto/alt.usuario.input';
import { InserirNovoUsuarioInput } from './dto/ins.usuario.input';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Resolver(() => UsuarioDto)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Mutation(() => UsuarioDto)
  CriarNovoUsuario(@Args('InserirNovoUsuarioInput') inserirNovoUsuarioInput: InserirNovoUsuarioInput) {
    return this.usuarioService.create(inserirNovoUsuarioInput);
  }

  @Query(() => [UsuarioDto], { name: 'usuario' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Query(() => UsuarioDto, { name: 'usuario' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Mutation(() => UsuarioDto)
  updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput) {
    return this.usuarioService.update(updateUsuarioInput.id, updateUsuarioInput);
  }

  @Mutation(() => UsuarioDto)
  removeUsuario(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.remove(id);
  }
}
