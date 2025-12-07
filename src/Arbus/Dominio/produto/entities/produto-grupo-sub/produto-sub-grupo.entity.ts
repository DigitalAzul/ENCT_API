import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_sub_grupo' })
export class ProdutoSubGrupoEntity extends _BaseEntity {


  @Column()
  titulo: string;

  @Column()
  descricao: string;
}
