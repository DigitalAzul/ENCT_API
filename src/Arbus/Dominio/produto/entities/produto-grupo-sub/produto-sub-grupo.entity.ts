import { Column, Entity, OneToMany } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoEntity } from '../produto/produto.entity';



@Entity({ name: 'produto_sub_grupo' })
export class ProdutoSubGrupoEntity extends _BaseEntityType {

  @OneToMany(() => ProdutoEntity, (produto) => produto.subgrupo)
  produtos: ProdutoEntity[]




  @Column()
  titulo: string;

  @Column()
  descricao: string;
}
