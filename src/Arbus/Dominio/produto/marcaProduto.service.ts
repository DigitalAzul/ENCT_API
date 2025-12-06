import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarcaProdutoArgs } from './dto/marcaProduto/inserirMarcaProduto.dto';
import { MarcaProdutoRespostaEntityDto } from './dto/marcaProduto/marcaProduto.resposta.entity.dto';
import { ProdutoMarcaEntity } from './entities/produto-marca/produto-marca.entity';



@Injectable()
export class MarcaProdutoService {
  constructor(
    @InjectRepository(ProdutoMarcaEntity)
    private produtoMarcaRepo: Repository<ProdutoMarcaEntity>,
  ) { }

  async create(inserirMarcaProdutoDto: MarcaProdutoArgs): Promise<Boolean> {
    try {
      const c = this.produtoMarcaRepo.create(inserirMarcaProdutoDto)
      const s = await this.produtoMarcaRepo.save(c)
      if (s) return true

      return false
    } catch (error) {
      return false
    }

  }

  async findMany(): Promise<MarcaProdutoRespostaEntityDto[]> {
    try {
      return this.produtoMarcaRepo.find()
    } catch (error) {
      return []
    }

  }

  async findOneById(_id: string): Promise<MarcaProdutoRespostaEntityDto | null> {
    try {
      const r = await this.produtoMarcaRepo.findOneOrFail({
        where: {
          _id
        }
      })

      return r
    } catch (error) {
      return null
    }

  }

  async update(id: string, dto: MarcaProdutoArgs): Promise<Boolean> {
    const a = await this.produtoMarcaRepo.update(
      { _id: id },
      { ...dto }
    )
    if (a) return true

    return false
  }


}
