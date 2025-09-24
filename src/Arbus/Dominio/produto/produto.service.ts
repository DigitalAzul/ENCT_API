import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InsProdutoGrupoEntradaDto } from './dto/grupoProduto/ins.produto-grupo.entrada.dto';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';
import { ProdutoRspostaEntityDto } from './dto/produto/produto.resposta.entity.dto';
import { ProdutoGrupoEntity } from './entities/produto-grupo/produto-grupo.entity';
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
  async ObterProduto(_id: string): Promise<ProdutoRspostaEntityDto | null> {
    return await this.produtoRepo.findOneBy({ _id })
  }
  async excluirProduto(_id: string) {
    return await this.produtoRepo.softDelete({ _id })
  }




  // **************************************************************
  // GRUPO DE PRODUTO
  // **************************************************************

  async inserirGrupoDeProduto(insProdutoGrupoDto: InsProdutoGrupoEntradaDto): Promise<ProdutoGrupoEntity> {
    const x = this.produtoGrupoRepo.create(insProdutoGrupoDto)
    console.log('insProdutoGrupoDto', insProdutoGrupoDto, x)
    return this.produtoGrupoRepo.save(x)
  }
  async ObterTodosGruposDeProduto(): Promise<ProdutoGrupoEntity[]> {
    return this.produtoGrupoRepo.find()
  }
  async ObterGrupoDeProduto(_id: string): Promise<ProdutoGrupoEntity | null> {
    return await this.produtoGrupoRepo.findOneBy({ _id })
  }
  async excluirGrupoDeProduto(_id: string) {
    return await this.produtoGrupoRepo.softDelete({ _id })
  }
}
