import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



@Entity()
export class SubGrupoProdutoRespostaEntityDto extends _BaseEntityType {

    @Column()
    titulo: string;

    @Column()
    descricao: string;

}