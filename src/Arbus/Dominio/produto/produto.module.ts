import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoSubGrupoEntity } from './entities/grupoProduto/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from './entities/produto/produto-grupo.entity';
import { ProdutoMarcaEntity } from './entities/produto/produto-marca.entity';
import { ProdutoEntity } from './entities/produto/produto.entity';
import { ProdutoUnidadeMedidaEntity } from './entities/unidadeMedidaProduto/produto-unidade-medida.entity';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProdutoEntity,
      ProdutoGrupoEntity,
      ProdutoSubGrupoEntity,
      ProdutoMarcaEntity,
      ProdutoUnidadeMedidaEntity
    ]),
  ],
  providers: [
    ProdutoResolver,
    ProdutoService,
  ],
})
export class ProdutoModule { }
