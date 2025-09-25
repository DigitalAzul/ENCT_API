import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InserirSiglaUnidadeMedidaProdutoDto } from './dto/siglaUnidadeMedidaProduto/inserirUnidadeMedidaProdutoDto';
import { SiglaUnidadeMedidaProdutoRespostaEntityDto } from './dto/siglaUnidadeMedidaProduto/siglaUnidadeMedidaProduto.resposta.entity.dto';
import { ProdutoUnidadeSiglaEntity } from './entities/produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';

@Injectable()
export class SiglaUnidadeMedidaProdutoService {
  constructor(
    @InjectRepository(ProdutoUnidadeSiglaEntity)
    private produtoUnidadeSiglaRepo: Repository<ProdutoUnidadeSiglaEntity>,
  ) { }

  async create(produtoUnidadeSiglaDto: InserirSiglaUnidadeMedidaProdutoDto): Promise<SiglaUnidadeMedidaProdutoRespostaEntityDto | null> {
    try {
      const c = this.produtoUnidadeSiglaRepo.create(produtoUnidadeSiglaDto)
      return this.produtoUnidadeSiglaRepo.save(c)
    } catch (error) {
      return null
    }

  }

  async findMany(): Promise<SiglaUnidadeMedidaProdutoRespostaEntityDto[]> {
    try {
      return this.produtoUnidadeSiglaRepo.find()
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



}
