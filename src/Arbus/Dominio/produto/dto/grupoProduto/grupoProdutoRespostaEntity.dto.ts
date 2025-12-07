import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../../comuns/interfaces/_BaseEntityType';


@Entity()
export class GrupoProdutoRespostaEntityDto extends _BaseEntity {


    @Column()
    titulo: string;


    @Column()
    descricao: string;
}