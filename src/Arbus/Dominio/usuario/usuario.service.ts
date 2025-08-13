import { Injectable } from '@nestjs/common';
import { UpdateUsuarioInput } from './dto/alt.usuario.input';
import { InserirNovoUsuarioInput } from './dto/ins.usuario.input';

@Injectable()
export class UsuarioService {
  create(createUsuarioInput: InserirNovoUsuarioInput) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioInput: UpdateUsuarioInput) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
