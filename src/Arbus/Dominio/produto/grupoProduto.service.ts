import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GrupoProdutoRespostaEntityDto } from "./dto/grupoProduto/grupoProdutoRespostaEntity.dto";
import {
  EditaGrupoProdutoArgs,
  cadProdutoGrupoArgs,
} from "./dto/grupoProduto/inserirGrupoPtoduto.dto";
import { ProdutoGrupoEntity } from "./entities/produto-grupo/produto-grupo.entity";

@Injectable()
export class GrupoProdutoService {
  constructor(
    @InjectRepository(ProdutoGrupoEntity)
    private produtoGrupoRepo: Repository<ProdutoGrupoEntity>,
  ) {}

  async create(grupoProdutoDto: cadProdutoGrupoArgs): Promise<boolean> {
    const c = this.produtoGrupoRepo.create(grupoProdutoDto);
    try {
      await this.produtoGrupoRepo.save(c);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async findMany(): Promise<GrupoProdutoRespostaEntityDto[]> {
    try {
      return this.produtoGrupoRepo.find();
    } catch (error) {
      return [];
    }
  }

  async findOneById(
    _id: string,
  ): Promise<GrupoProdutoRespostaEntityDto | null> {
    try {
      const r = await this.produtoGrupoRepo.findOneOrFail({
        where: {
          _id,
        },
      });

      return r;
    } catch (error) {
      return null;
    }
  }

  async update(id: string, dto: EditaGrupoProdutoArgs): Promise<boolean> {
    const a = await this.produtoGrupoRepo.update({ _id: id }, { ...dto });
    if (a) return true;

    return false;
  }
}
