import { Column, Entity } from 'typeorm';
import { _BaseEntityTypeResposta } from '../../../comuns/interfaces/_BaseEntityTypeResposta';


@Entity()
export class GrupoProdutoRespostaEntityDto extends _BaseEntityTypeResposta {


    @Column()
    titulo: string;


    @Column()
    descricao: string;
}