
import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';



@Entity()
export class SiglaUnidadeMedidaProdutoRespostaEntityDto extends _BaseEntity {

  @Column()
  sigla: string;


  @Column()
  descricao: string;

}
