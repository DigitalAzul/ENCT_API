import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NaturezaJuridicaEntity } from './entities/natureza_juridica.entity';
import { PessoaEntity } from './entities/pessoa.entity';
import { PessoaResolver } from './pessoa.resolver';
import { PessoaService } from './pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaEntity, NaturezaJuridicaEntity])],
  providers: [PessoaResolver, PessoaService],
})
export class PessoaModule { }
