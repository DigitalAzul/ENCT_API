import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';

@Entity({ name: 'usuario' })
export class UsuarioEntity extends _BaseEntityType {

  @Column()
  pnome: string;


  @Column()
  snome: string;


  @Column()
  segredo: string;


  @Column()
  email: string;


  @Column()
  roleId: string;

}
