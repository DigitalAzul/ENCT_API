import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { _Filtering, _Pagination, _Sorting } from '../comuns/paginacao/paginationParams';
import { PaginatedResponse } from '../comuns/paginacao/returnDTO';
import { getOrder, getWhere } from '../comuns/paginacao/typeORMHelper';
import { UpdatePessoaInputDto } from './dto/alt.pessoa.input.dto';
import { InserirPessoaInputDto } from './dto/ins.pessoa.input.dto';
import { PessoaRespostaEntityDto } from './dto/pessoa.resposta.entity.dto';
import { PessoaEntityCreateRxDto, PessoasEntity } from './entities/pessoa.entity';


@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoasEntity)
    private pessoaRepository: Repository<PessoasEntity>,

  ) { }


  create(pessoaInput: InserirPessoaInputDto): Promise<PessoaEntityCreateRxDto> {
    const c = this.pessoaRepository.create(pessoaInput);
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

  update(_id: string, updatePessoaInput: UpdatePessoaInputDto) {
    return {};
  }

  remove(id: string) {
    return {};
  }


  async paginacao(
    { page, limit, size, offset }: _Pagination,
    sort: _Sorting,
    filter: _Filtering,
  ): Promise<PaginatedResponse> {
    const where = getWhere(filter);
    const order = getOrder(sort);
    console.log()
    console.log()
    console.log(where, order)
    console.log()
    console.log()
    const [Pessoas, total] = await this.pessoaRepository.findAndCount({
      where,
      order,
      take: limit,
      skip: offset,
    });

    return {
      totalItems: total,
      items: Pessoas,
      page,
      size
    };
  }




}
