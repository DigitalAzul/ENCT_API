import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_grupo' })
export class ProdutoGrupoEntity extends _BaseEntity {


  @Column()
  titulo: string;


  @Column()
  descricao: string;

}