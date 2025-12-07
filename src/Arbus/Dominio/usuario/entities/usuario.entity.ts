import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';

@Entity({ name: 'usuario' })
export class UsuarioEntity extends _BaseEntity {

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
