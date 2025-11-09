import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompraService } from './compra.service';
import { CreateCompraInput } from './dto/create-compra.input';
import { UpdateCompraInput } from './dto/update-compra.input';
import { CompraSchema } from './schema/compra.schema';

@Resolver(() => CompraSchema)
export class CompraResolver {
  constructor(private readonly compraService: CompraService) { }

  @Mutation(() => CompraSchema)
  createCompra(@Args('createCompraInput') createCompraInput: CreateCompraInput) {
    return this.compraService.create(createCompraInput);
  }

  @Query(() => [CompraSchema], { name: 'compras' })
  findAll() {
    return this.compraService.findAll();
  }

  @Query(() => CompraSchema, { name: 'compra' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.compraService.findOne(id);
  }

  @Mutation(() => CompraSchema)
  updateCompra(@Args('updateCompraInput') updateCompraInput: UpdateCompraInput) {
    return this.compraService.update(updateCompraInput.id, updateCompraInput);
  }

  @Mutation(() => CompraSchema)
  removeCompra(@Args('id', { type: () => Int }) id: number) {
    return this.compraService.remove(id);
  }
}
