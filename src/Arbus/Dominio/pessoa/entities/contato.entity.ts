import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';




@Entity({ name: 'contato' })
export class ContatoEntity extends _BaseEntity {

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


@ObjectType()
export class ContatoObjectTypeBase extends _BaseEntity {

  @Field()
  mercador_id: string;

  @Field()
  tipo: "TELEFONE" | "EMAIL" | "WEB" | "SOCIAL"

  @Field()
  ddd: string;

  @Field()
  numero: string;

  @Field()
  email: string;

  @Field()
  web: string;

  @Field()
  social: string;
}
@ObjectType()
export class ContatoObjectType extends _BaseEntity {

  @Field()
  mercador_id: string;

  @Field()
  tipo: "TELEFONE" | "EMAIL" | "WEB" | "SOCIAL"

  @Field()
  ddd: string;

  @Field()
  numero: string;

  @Field()
  email: string;

  @Field()
  web: string;

  @Field()
  social: string;
}