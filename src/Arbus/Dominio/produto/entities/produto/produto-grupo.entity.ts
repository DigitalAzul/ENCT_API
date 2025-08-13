import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_grupo' })
export class ProdutoGrupoEntity extends _BaseEntityType {


  @Column()
  codigo_grupo_produto: string;


  @Column()
  descricao: string;


  @Column()
  imagem: string;



}
