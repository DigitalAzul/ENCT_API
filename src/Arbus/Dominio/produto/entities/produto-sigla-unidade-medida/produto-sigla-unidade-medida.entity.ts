import { Column, Entity, OneToMany } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoEntity } from '../produto/produto.entity';



@Entity({ name: 'produto_unidade_sigla' })
export class ProdutoUnidadeSiglaEntity extends _BaseEntityType {

  @OneToMany(() => ProdutoEntity, (produto) => produto.sigla_primaria)
  produtos: ProdutoEntity[]


  @Column()
  sigla: string;

  @Column()
  descricao: string;



}
