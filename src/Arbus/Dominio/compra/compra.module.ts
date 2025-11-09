import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraResolver } from './compra.resolver';
import { CompraService } from './compra.service';
import { CompraEntity } from './entities/compra.entity';
import { CompraItemEntity } from './entities/compraItem.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompraEntity,
      CompraItemEntity
    ]),
  ],
  providers: [CompraResolver, CompraService],
})
export class CompraModule { }
