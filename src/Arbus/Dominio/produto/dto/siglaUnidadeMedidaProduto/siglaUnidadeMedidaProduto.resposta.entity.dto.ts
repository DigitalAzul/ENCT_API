
import { Column, Entity } from 'typeorm';
import { _BaseEntityTypeResposta } from '../../../comuns/interfaces/_BaseEntityTypeResposta';



@Entity()
export class SiglaUnidadeMedidaProdutoRespostaEntityDto extends _BaseEntityTypeResposta {

  @Column()
  sigla: string;


  @Column()
  descricao: string;

}
