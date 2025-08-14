import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_unidade_sigla' })
export class ProdutoUnidadeSiglaEntity extends _BaseEntityType {


  @Column()
  sigla: string;

  @Column()
  descricao: string;



}
