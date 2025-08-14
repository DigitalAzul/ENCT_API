import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoSubGrupoEntity } from '../produto-grupo-sub/produto-sub-grupo.entity';



@Entity({ name: 'produto_grupo' })
export class ProdutoGrupoEntity extends _BaseEntityType {


  @OneToOne(() => ProdutoSubGrupoEntity)
  @JoinColumn()
  subgrupo: ProdutoSubGrupoEntity


  @Column()
  codigo_grupo_produtoId: string;


  @Column()
  codigo_grupo_produto: string;


  @Column()
  descricao: string;


  @Column()
  imagem: string;



}
