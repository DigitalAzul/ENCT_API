import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InsProdutoGrupoEntradaDto } from './dto/grupoProduto/ins.produto-grupo.enrtada.dto';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';
import { ProdutoRspostaEntityDto } from './dto/produto/produto.resposta.entity.dto';
import { ProdutoGrupoEntity } from './entities/produto/produto-grupo.entity';
import { ProdutoEntity } from './entities/produto/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoGrupoEntity)
    private produtoGrupoRepo: Repository<ProdutoGrupoEntity>,
    @InjectRepository(ProdutoEntity)
    private produtoRepo: Repository<ProdutoEntity>,
  ) { }

  async inserirProduto(insProdutoEntraDto: InsProdutoEntraDto): Promise<ProdutoRspostaEntityDto> {
    const c = this.produtoRepo.create(insProdutoEntraDto)

    return this.produtoRepo.save(c)
  }
  async ObterTodosProdutos(): Promise<ProdutoRspostaEntityDto[]> {
    return this.produtoRepo.find()
  }
  async ObterProduto(id: string): Promise<ProdutoRspostaEntityDto | null> {
    return await this.produtoRepo.findOneBy({ id })
  }
  async excluirProduto(id: string) {
    return await this.produtoRepo.softDelete({ id })
  }




  // **************************************************************
  // GRUPO DE PRODUTO
  // **************************************************************

  async inserirGrupoDeProduto(insProdutoGrupoDto: InsProdutoGrupoEntradaDto): Promise<ProdutoGrupoEntity> {
    return this.produtoGrupoRepo.create(insProdutoGrupoDto)
  }
  async ObterTodosGruposDeProduto(): Promise<ProdutoGrupoEntity[]> {
    return this.produtoGrupoRepo.find()
  }
  async ObterGrupoDeProduto(id: string): Promise<ProdutoGrupoEntity | null> {
    return await this.produtoGrupoRepo.findOneBy({ id })
  }
  async excluirGrupoDeProduto(id: string) {
    return await this.produtoGrupoRepo.softDelete({ id })
  }
}
