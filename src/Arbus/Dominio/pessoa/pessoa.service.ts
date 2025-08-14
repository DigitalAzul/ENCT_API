import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePessoaInputDto } from './dto/alt.pessoa.input.dto';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';
import { PessoaRespostaEntityDto } from './dto/pessoa.resposta.entity.dto';
import { PessoasEntity } from './entities/pessoa.entity';


@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoasEntity)
    private pessoaRepository: Repository<PessoasEntity>,
  ) { }


  create(inserirPessoaInput: InserirPessoaInputDto) {
    const c = this.pessoaRepository.create(inserirPessoaInput);
    return this.pessoaRepository.save(c);
  }

  findAll(): Promise<PessoaRespostaEntityDto[]> {
    return this.pessoaRepository.find({
      order: {
        _id: {
          direction: "DESC"
        }
      }
    });
  }

  findOne(id: string) {
    return {};
  }

  update(id: string, updatePessoaInput: UpdatePessoaInputDto) {
    return {};
  }

  remove(id: string) {
    return {};
  }
}
