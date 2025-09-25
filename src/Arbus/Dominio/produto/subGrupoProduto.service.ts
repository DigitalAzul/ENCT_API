import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InserirSubGrupoProdutoDto } from './dto/subGrupoProduto/inserirSubGrupoProduto.dto';
import { SubGrupoProdutoRespostaEntityDto } from './dto/subGrupoProduto/subGrupoProdutoRespostaEntity.dto';
import { ProdutoSubGrupoEntity } from './entities/produto-grupo-sub/produto-sub-grupo.entity';



@Injectable()
export class SubGrupoProdutoService {
  constructor(
    @InjectRepository(ProdutoSubGrupoEntity)
    private produtoSubGrupoRepo: Repository<ProdutoSubGrupoEntity>,
  ) { }

  async create(subGrupoProdutoDto: InserirSubGrupoProdutoDto): Promise<SubGrupoProdutoRespostaEntityDto | null> {
    try {
      const c = this.produtoSubGrupoRepo.create(subGrupoProdutoDto)
      return this.produtoSubGrupoRepo.save(c)
    } catch (error) {
      return null
    }

  }

  async findMany(): Promise<SubGrupoProdutoRespostaEntityDto[]> {
    try {
      return this.produtoSubGrupoRepo.find()
    } catch (error) {
      return []
    }

  }

  async findOneById(_id: string): Promise<SubGrupoProdutoRespostaEntityDto | null> {
    try {
      const r = await this.produtoSubGrupoRepo.findOneOrFail({
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
