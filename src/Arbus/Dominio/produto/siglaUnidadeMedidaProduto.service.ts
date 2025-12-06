import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InserirSiglaUnidadeMedidaProdutoDto, SiglaUnidadeMedidaProdutoEditaArgs } from './dto/siglaUnidadeMedidaProduto/inserirUnidadeMedidaProdutoDto';
import { SiglaUnidadeMedidaProdutoRespostaEntityDto } from './dto/siglaUnidadeMedidaProduto/siglaUnidadeMedidaProduto.resposta.entity.dto';
import { ProdutoUnidadeSiglaEntity } from './entities/produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';

@Injectable()
export class SiglaUnidadeMedidaProdutoService {
  constructor(
    @InjectRepository(ProdutoUnidadeSiglaEntity)
    private produtoUnidadeSiglaRepo: Repository<ProdutoUnidadeSiglaEntity>,
  ) { }

  async create(produtoUnidadeSiglaDto: InserirSiglaUnidadeMedidaProdutoDto): Promise<Boolean> {
    try {
      const c = this.produtoUnidadeSiglaRepo.create(produtoUnidadeSiglaDto)
      const s = await this.produtoUnidadeSiglaRepo.save(c)
      if (s) return true

      return false
    } catch (error) {
      return false
    }

  }

  async findMany(): Promise<SiglaUnidadeMedidaProdutoRespostaEntityDto[]> {
    try {
      const a = await this.produtoUnidadeSiglaRepo.find()

      return a
    } catch (error) {
      return []
    }

  }

  async findOneById(_id: string): Promise<SiglaUnidadeMedidaProdutoRespostaEntityDto | null> {
    try {
      const r = await this.produtoUnidadeSiglaRepo.findOneOrFail({
        where: {
          _id
        }
      })

      return r
    } catch (error) {
      return null
    }

  }

  async update(id: string, dto: SiglaUnidadeMedidaProdutoEditaArgs): Promise<Boolean> {
    const a = await this.produtoUnidadeSiglaRepo.update(
      { _id: id },
      { ...dto }
    )
    if (a) return true

    return false
  }


}
