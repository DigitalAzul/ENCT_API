import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';



@Entity({ name: 'natureza_juridica' })
export class NaturezaJuridicaEntity extends _BaseEntityType {

  @Column()
  titulo: string

}