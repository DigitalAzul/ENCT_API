import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_unidade_sigla' })
export class ProdutoUnidadeSiglaEntity extends _BaseEntity {


  @Column()
  sigla: string;

  @Column()
  descricao: string;



}
