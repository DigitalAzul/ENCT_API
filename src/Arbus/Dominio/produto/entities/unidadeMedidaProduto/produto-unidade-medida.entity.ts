import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'Produto_Unidade_Medida' })
export class ProdutoUnidadeMedidaEntity extends _BaseEntityType {


  @Column()
  Descricao: string;


  @Column()
  SiglaUnida: string;


  @Column()
  AdmiteFracao: string;


  @Column()
  AlteracaoUsuario: string;


  @Column()
  AlteracaoDataHora: string;


}
