import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompraInput } from './dto/create-compra.input';
import { UpdateCompraInput } from './dto/update-compra.input';
import { CompraEntity } from './entities/compra.entity';

@Injectable()
export class CompraService {

  constructor(
    @InjectRepository(CompraEntity)
    private compraRepo: Repository<CompraEntity>
  ) { }

  create(createCompraInput: CreateCompraInput) {
    return 'This action adds a new compra';
  }

  findAll() {
    return this.compraRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  update(id: number, updateCompraInput: UpdateCompraInput) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
