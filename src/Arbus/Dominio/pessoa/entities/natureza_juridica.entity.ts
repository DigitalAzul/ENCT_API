import { ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';
import { _BaseObjectTypeComum } from '../../comuns/interfaces/_BaseObjectTypeComum';



export class NaturezaJuridicaBase {

  @Column()
  titulo: string

}


@Entity({ name: 'natureza_juridica' })
export class NaturezaJuridicaEntity extends _BaseEntity {
  @Column()
  titulo: string
}

@Entity()
export class NaturezaJuridicaEntityResposta extends NaturezaJuridicaEntity { }


@ObjectType()
export class NaturezaJuridicaRespostaDto extends _BaseObjectTypeComum { }