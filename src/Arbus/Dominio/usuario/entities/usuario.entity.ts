import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';

@Entity({ name: 'Usuario' })
export class UsuarioEntity extends _BaseEntityType {

  @Column()
  pnome: string;


  @Column()
  snome: string;


  @Column()
  role: string;

}
