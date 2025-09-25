import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InserirMarcaProdutoDto } from './dto/marcaProduto/inserirMarcaProduto.dto';
import { MarcaProdutoRespostaEntityDto } from './dto/marcaProduto/marcaProduto.resposta.entity.dto';
import { ProdutoMarcaEntity } from './entities/produto-marca/produto-marca.entity';



@Injectable()
export class MarcaProdutoService {
  constructor(
    @InjectRepository(ProdutoMarcaEntity)
    private produtoMarcaRepo: Repository<ProdutoMarcaEntity>,
  ) { }

  async create(inserirMarcaProdutoDto: InserirMarcaProdutoDto): Promise<MarcaProdutoRespostaEntityDto | null> {
    try {
      const c = this.produtoMarcaRepo.create(inserirMarcaProdutoDto)
      return this.produtoMarcaRepo.save(c)
    } catch (error) {
      return null
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



}
