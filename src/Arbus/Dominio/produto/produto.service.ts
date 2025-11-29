import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SITUACAO_PRODUTO } from '../comuns/types/ProdutoTypes';
import { InsProdutoEntraDto } from './dto/produto/ins.produto.entrada.dto';
import { ProdutoRespostaEntityDto } from './dto/produto/produto.resposta.entity.dto';
import { PRODUTO_CLASSIFICACAO_ENUN } from './entities/produto-classificacoa/produto-classificacao-enum';
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
    const a = await this.produtoRepo.find({
      relations: ['grupo']
    })
    console.log(a)
    return a
  }
  async ObterProduto(_id: string): Promise<ProdutoRespostaEntityDto | null> {
    return await this.produtoRepo.findOneBy({ _id })
  }
  async excluirProduto(_id: string) {
    return await this.produtoRepo.softDelete({ _id })
  }
  async classificacaoProduto() {
    const a = [
      { value: PRODUTO_CLASSIFICACAO_ENUN.REVENDA, label: PRODUTO_CLASSIFICACAO_ENUN.REVENDA },
      { value: PRODUTO_CLASSIFICACAO_ENUN.CONSUMO, label: PRODUTO_CLASSIFICACAO_ENUN.CONSUMO }
    ]
    return a

  }
  async situacaoProduto() {
    const a = [
      { value: SITUACAO_PRODUTO.ATIVO, label: SITUACAO_PRODUTO.ATIVO },
      { value: SITUACAO_PRODUTO.INATIVO, label: SITUACAO_PRODUTO.INATIVO }
    ]
    return a

  }



}
