import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InserirSubGrupoProdutoArgs, UpdateSubGrupoProdutoArgs } from './dto/subGrupoProduto/inserirSubGrupoProduto.dto';
import { SubGrupoProdutoRespostaEntityDto } from './dto/subGrupoProduto/subGrupoProdutoRespostaEntity.dto';
import { ProdutoSubGrupoEntity } from './entities/produto-grupo-sub/produto-sub-grupo.entity';



@Injectable()
export class SubGrupoProdutoService {
  constructor(
    @InjectRepository(ProdutoSubGrupoEntity)
    private produtoSubGrupoRepo: Repository<ProdutoSubGrupoEntity>,
  ) { }

  async create(subGrupoProdutoDto: InserirSubGrupoProdutoArgs): Promise<Boolean> {
    try {
      const c = this.produtoSubGrupoRepo.create(subGrupoProdutoDto)
      const s = await this.produtoSubGrupoRepo.save(c)
      if (s) return true

      return false
    } catch (error) {
      return false
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


  async update(id: string, dto: UpdateSubGrupoProdutoArgs): Promise<Boolean> {
    const a = await this.produtoSubGrupoRepo.update(
      { _id: id },
      { ...dto }
    )
    if (a) return true

    return false
  }



}
