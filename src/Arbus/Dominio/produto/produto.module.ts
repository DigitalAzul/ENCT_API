import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraEntity } from '../compra/entities/compra.entity';
import { ProdutoSubGrupoEntity } from './entities/produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from './entities/produto-grupo/produto-grupo.entity';
import { ProdutoMarcaEntity } from './entities/produto-marca/produto-marca.entity';
import { ProdutoUnidadeSiglaEntity } from './entities/produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';
import { ProdutoUnidadeMedidaEntity } from './entities/produto-unidade-medida/produto-unidade-medida.entity';
import { ProdutoEntity } from './entities/produto/produto.entity';
import { GrupoProdutoService } from './grupoProduto.service';
import { MarcaProdutoService } from './marcaProduto.service';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';
import { SiglaUnidadeMedidaProdutoService } from './siglaUnidadeMedidaProduto.service';
import { SubGrupoProdutoService } from './subGrupoProduto.service';
import { UnidadeMedidaProdutoService } from './unidadeMedidaProduto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProdutoEntity,
      ProdutoSubGrupoEntity,
      ProdutoMarcaEntity,
      ProdutoUnidadeMedidaEntity,
      ProdutoUnidadeSiglaEntity,
      ProdutoMarcaEntity,
      ProdutoGrupoEntity,
      CompraEntity,

    ]),
  ],
  providers: [
    ProdutoResolver,
    ProdutoService,
    SiglaUnidadeMedidaProdutoService,
    UnidadeMedidaProdutoService,
    MarcaProdutoService,
    SubGrupoProdutoService,
    GrupoProdutoService,
  ],
})
export class ProdutoModule { }
