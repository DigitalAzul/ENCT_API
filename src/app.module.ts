import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaturezaJuridicaEntity } from './Arbus/Dominio/pessoa/entities/natureza_juridica.entity';
import { PessoaModule } from './Arbus/Dominio/pessoa/pessoa.module';
import { ProdutoSubGrupoEntity } from './Arbus/Dominio/produto/entities/grupoProduto/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from './Arbus/Dominio/produto/entities/produto/produto-grupo.entity';
import { ProdutoMarcaEntity } from './Arbus/Dominio/produto/entities/produto/produto-marca.entity';
import { ProdutoEntity } from './Arbus/Dominio/produto/entities/produto/produto.entity';
import { ProdutoUnidadeMedidaEntity } from './Arbus/Dominio/produto/entities/unidadeMedidaProduto/produto-unidade-medida.entity';
import { ProdutoModule } from './Arbus/Dominio/produto/produto.module';
import { UsuarioModule } from './Arbus/Dominio/usuario/usuario.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.MIKRO_ORM_HOST,
      port: parseInt(process.env.MIKRO_ORM_PORT ? process.env.MIKRO_ORM_PORT : '5432'),
      username: process.env.MIKRO_ORM_USERNAME,
      password: process.env.MIKRO_ORM_PASSWORD,
      database: process.env.MIKRO_ORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      migrations: [__dirname + 'Arbus/Infra/migrations/{.ts}'],
      migrationsRun: true,
      entities: [
        NaturezaJuridicaEntity,
        ProdutoEntity,
        ProdutoGrupoEntity,
        ProdutoSubGrupoEntity,
        ProdutoMarcaEntity,
        ProdutoUnidadeMedidaEntity,
        UsuarioModule
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: true
    }),
    PessoaModule,
    ProdutoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
