import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_marca' })
export class ProdutoMarcaEntity extends _BaseEntityType {


  @Column()
  titulo: string;

  @Column()
  descricao: string;

}
