import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'produto_marca' })
export class ProdutoMarcaEntity extends _BaseEntity {


  @Column()
  titulo: string;

  @Column()
  descricao: string;

}
