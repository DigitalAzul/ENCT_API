import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'Natureza_Juridica' })
export class NaturezaJuridicaEntity extends _BaseEntityType {

  @Column()
  titulo: string

}