import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';


@Entity()
export class NaturezaJuridicaEntityBase {

  @Column()
  codigo: string


  @Column()
  descricao: string

}
@ObjectType()
export class NaturezaJuridicaObjectTypeBase {

  @Field()
  codigo: string


  @Field()
  descricao: string

}
@InputType()
export class NaturezaJuridicaInputTypeBase {

  @Field()
  codigo: string


  @Field()
  descricao: string

}





@Entity({ name: 'natureza_juridica' })
export class NaturezaJuridicaEntity extends _BaseEntity {

  @Column()
  codigo: string


  @Column()
  descricao: string
}

@Entity()
export class NaturezaJuridicaEntityResposta extends NaturezaJuridicaEntity { }




@ObjectType()
export class NaturezaJuridicaRespostaDto extends _BaseObjectType {

  @Field()
  codigo: string


  @Field()
  descricao: string
}


@InputType()
export class NaturezaJuridicaArgs extends NaturezaJuridicaInputTypeBase { }



