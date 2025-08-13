import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'Produto_Sub_Grupo' })
export class ProdutoSubGrupoEntity extends _BaseEntityType {


  @Column()
  CodigoGrupoProduto_id: string;


  @Column()
  CodigoSubGrupoProduto: string;


  @Column()
  Descricao: string;


  @Column()
  Imagem: string;


  @Column()
  AlteracaoUsuario: string;


  @Column()
  AlteracaoDataHora: string;



}
