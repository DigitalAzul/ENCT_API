import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoEntity } from './Arbus/Dominio/pessoa/entities/contato.entity';
import { EnderecoEntity } from './Arbus/Dominio/pessoa/entities/endereco.entity';
import { NaturezaJuridicaEntity } from './Arbus/Dominio/pessoa/entities/natureza_juridica.entity';
import { PessoasEntity } from './Arbus/Dominio/pessoa/entities/pessoa.entity';
import { PessoaModule } from './Arbus/Dominio/pessoa/pessoa.module';
import { ProdutoSubGrupoEntity } from './Arbus/Dominio/produto/entities/produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from './Arbus/Dominio/produto/entities/produto-grupo/produto-grupo.entity';
import { ProdutoMarcaEntity } from './Arbus/Dominio/produto/entities/produto-marca/produto-marca.entity';
import { ProdutoUnidadeSiglaEntity } from './Arbus/Dominio/produto/entities/produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';
import { ProdutoUnidadeMedidaEntity } from './Arbus/Dominio/produto/entities/produto-unidade-medida/produto-unidade-medida.entity';
import { ProdutoEntity } from './Arbus/Dominio/produto/entities/produto/produto.entity';
import { ProdutoModule } from './Arbus/Dominio/produto/produto.module';
import { UsuarioEntity } from './Arbus/Dominio/usuario/entities/usuario.entity';
import { UsuarioModule } from './Arbus/Dominio/usuario/usuario.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPE_ORM_HOST,
      port: parseInt(process.env.TYPE_ORM_PORT ? process.env.TYPE_ORM_PORT : '5432'),
      username: process.env.TYPE_ORM_USERNAME,
      password: process.env.TYPE_ORM_PASSWORD,
      database: process.env.TYPE_ORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      migrations: [__dirname + 'Arbus/Infra/migrations/{.ts}'],
      migrationsRun: true,
      entities: [
        UsuarioEntity,
        PessoasEntity,
        NaturezaJuridicaEntity,
        EnderecoEntity,
        ContatoEntity,
        ProdutoEntity,
        ProdutoGrupoEntity,
        ProdutoSubGrupoEntity,
        ProdutoMarcaEntity,
        ProdutoUnidadeMedidaEntity,
        ProdutoUnidadeSiglaEntity,
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
