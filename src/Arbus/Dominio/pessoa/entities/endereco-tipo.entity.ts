import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';
import { _BaseObjectType } from '../../comuns/interfaces/_BaseObjectType';




@Entity({ name: 'endereco_tipo' })
export class EnderecoTipoEntity extends _BaseEntity {


  @Column()
  titulo: string

  @Column()
  descricao: string;


}


@ObjectType()
export class EnderecoTipoBase {


  @Field()
  titulo: string

  @Field()
  descricao: string;

}

@ObjectType()
export class EnderecoTipoBaseComCabecalho extends _BaseObjectType {

  @Field()
  titulo: string

  @Field()
  descricao: string;

}



@ObjectType()
export class EnderecoTipoDto extends EnderecoTipoBaseComCabecalho { }


@InputType()
export class EnderecoTipoInputBase {

  @Field()
  titulo: string

  @Field()
  descricao: string;
}
@InputType()
export class EnderecoTipoArgs extends EnderecoTipoInputBase { }