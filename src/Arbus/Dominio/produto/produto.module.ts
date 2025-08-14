import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoSubGrupoEntity } from './entities/produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from './entities/produto-grupo/produto-grupo.entity';
import { ProdutoMarcaEntity } from './entities/produto-marca/produto-marca.entity';
import { ProdutoUnidadeMedidaEntity } from './entities/produto-unidade-medida/produto-unidade-medida.entity';
import { ProdutoEntity } from './entities/produto/produto.entity';
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
