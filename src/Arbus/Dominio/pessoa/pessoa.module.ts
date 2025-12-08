import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoTipoEntity } from './entities/endereco-tipo.entity';
import { EnderecoEntity } from './entities/endereco.entity';
import { NaturezaJuridicaEntity } from './entities/natureza_juridica.entity';
import { PessoasEntity } from './entities/pessoa.entity';
import { PessoaResolver } from './pessoa.resolver';
import { PessoaService } from './pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([PessoasEntity, NaturezaJuridicaEntity, EnderecoEntity, EnderecoTipoEntity])],
  providers: [PessoaResolver, PessoaService],
})
export class PessoaModule { }
