import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'Produto_Marca' })
export class ProdutoMarcaEntity extends _BaseEntityType {


  @Column()
  Descricao: string;


  @Column()
  Imagem: string;


  @Column()
  AlteracaoUsuario: string;


  @Column()
  AlteracaoDataHora: string;




}
