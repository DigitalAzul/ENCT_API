import { _BaseEntityTypeResposta } from 'src/Arbus/Dominio/comuns/interfaces/_BaseEntityTypeResposta';
import { Column, Entity } from 'typeorm';


@Entity()
export class GrupoProdutoRespostaEntityDto extends _BaseEntityTypeResposta {


    @Column()
    titulo: string;


    @Column()
    descricao: string;
}