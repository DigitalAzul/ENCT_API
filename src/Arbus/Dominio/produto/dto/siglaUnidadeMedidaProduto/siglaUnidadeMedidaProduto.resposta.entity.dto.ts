import { _BaseEntityTypeResposta } from 'src/Arbus/Dominio/comuns/interfaces/_BaseEntityTypeResposta';
import { Column, Entity } from 'typeorm';



@Entity()
export class SiglaUnidadeMedidaProdutoRespostaEntityDto extends _BaseEntityTypeResposta {

  @Column()
  sigla: string;


  @Column()
  descricao: string;

}
