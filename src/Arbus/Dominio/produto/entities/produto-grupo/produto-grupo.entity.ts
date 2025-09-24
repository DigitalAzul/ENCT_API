import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_grupo' })
export class ProdutoGrupoEntity extends _BaseEntityType {


  @Column()
  titulo: string;


  @Column()
  descricao: string;

}