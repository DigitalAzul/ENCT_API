import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioResolver } from './usuario.resolver';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioModule])],
  providers: [UsuarioResolver, UsuarioService],
})
export class UsuarioModule { }
