import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InserirUnidadeMedidaProdutoDto } from './dto/unidadeMedidaProduto/inserirUnidadeMedidaProduto.dto';
import { UnidadeMedidaProdutoRespostaEntityDto } from './dto/unidadeMedidaProduto/unidadeMedidaProduto.resposta.entity.dto';
import { ProdutoUnidadeMedidaEntity } from './entities/produto-unidade-medida/produto-unidade-medida.entity';



@Injectable()
export class UnidadeMedidaProdutoService {
  constructor(
    @InjectRepository(ProdutoUnidadeMedidaEntity)
    private produtoUnidadeMedidaRepo: Repository<ProdutoUnidadeMedidaEntity>,
  ) { }

  async create(produtoUnidadeMedidaDto: InserirUnidadeMedidaProdutoDto): Promise<UnidadeMedidaProdutoRespostaEntityDto | null> {
    try {
      const c = this.produtoUnidadeMedidaRepo.create(produtoUnidadeMedidaDto)
      return this.produtoUnidadeMedidaRepo.save(c)
    } catch (error) {
      return null
    }

  }

  async findMany(): Promise<UnidadeMedidaProdutoRespostaEntityDto[]> {
    try {
      return this.produtoUnidadeMedidaRepo.find()
    } catch (error) {
      return []
    }

  }

  async findOneById(_id: string): Promise<UnidadeMedidaProdutoRespostaEntityDto | null> {
    try {
      const r = await this.produtoUnidadeMedidaRepo.findOneOrFail({
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
