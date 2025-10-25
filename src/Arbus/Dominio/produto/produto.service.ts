import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';
import { ProdutoRespostaEntityDto } from './dto/produto/produto.resposta.entity.dto';
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

  async inserirProduto(insProdutoEntraDto: InsProdutoEntraDto): Promise<ProdutoRespostaEntityDto> {
    const c = this.produtoRepo.create(insProdutoEntraDto)

    return this.produtoRepo.save(c)
  }
  async ObterTodosProdutos(): Promise<ProdutoRespostaEntityDto[]> {
    return this.produtoRepo.find()
  }
  async ObterProduto(_id: string): Promise<ProdutoRespostaEntityDto | null> {
    return await this.produtoRepo.findOneBy({ _id })
  }
  async excluirProduto(_id: string) {
    return await this.produtoRepo.softDelete({ _id })
  }



}
