import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_sub_grupo' })
export class ProdutoSubGrupoEntity extends _BaseEntityType {


  @Column()
  titulo: string;

  @Column()
  descricao: string;


  @Column()
  grupo_produtoId: string;



}
