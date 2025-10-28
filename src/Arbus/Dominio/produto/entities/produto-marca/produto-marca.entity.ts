import { Column, Entity, OneToMany } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoEntity } from '../produto/produto.entity';



@Entity({ name: 'produto_marca' })
export class ProdutoMarcaEntity extends _BaseEntityType {

  @OneToMany(() => ProdutoEntity, (produto) => produto.marca)
  produtos: ProdutoEntity[]


  @Column()
  titulo: string;

  @Column()
  descricao: string;

}
