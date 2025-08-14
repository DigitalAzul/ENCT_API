import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';




@Entity({ name: 'contato' })
export class ContatoEntity extends _BaseEntityType {

  @Column()
  mercador_id: string;

  @Column()
  tipo: "TELEFONE" | "EMAIL" | "WEB" | "SOCIAL"

  @Column()
  ddd: string;

  @Column()
  numero: string;

  @Column()
  email: string;

  @Column()
  web: string;

  @Column()
  social: string;
}