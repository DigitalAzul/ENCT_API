import { Column, Entity, OneToMany } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoEntity } from '../produto/produto.entity';



@Entity({ name: 'produto_grupo' })
export class ProdutoGrupoEntity extends _BaseEntityType {

  @OneToMany(() => ProdutoEntity, (produto) => produto.grupo)
  produtos: ProdutoEntity[]


  @Column()
  titulo: string;


  @Column()
  descricao: string;

}