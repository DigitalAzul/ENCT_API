import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { _BaseEntity } from '../../comuns/interfaces/_BaseEntityType';
import { NaturezaJuridicaEntity, NaturezaJuridicaRespostaDto } from './natureza_juridica.entity';



@Entity()
export class PessoaEntityBase {

  @Column()
  filial: boolean;


  @Column()
  razao_social: string;


  @Column()
  nome_fantasia: string;


  @Column()
  cnpj_cpf: string;


  @Column()
  inscricao_estadual: string;


  @Column()
  pessoa_juridica: boolean;


  @Column()
  tipo_natureza_juridica_id: string;


  @OneToOne(() => NaturezaJuridicaEntity)
  @JoinColumn()
  tipo_natureza_juridica: NaturezaJuridicaEntity

  @Column()
  cnae: string;

}


@ObjectType()
export class PessoaObjectTypeBase {

  @Field()
  filial: boolean;


  @Field()
  razao_social: string;


  @Field()
  nome_fantasia: string;


  @Field()
  cnpj_cpf: string;


  @Field()
  inscricao_estadual: string;


  @Field()
  pessoa_juridica: boolean;


  @Field()
  tipo_natureza_juridica_id: string;


  @Field()
  tipo_natureza_juridica: NaturezaJuridicaRespostaDto

  @Field()
  cnae: string;
}


@ObjectType()
export class PessoaDto extends PessoaObjectTypeBase { }




@Entity({ name: 'pessoas' })
export class PessoasEntity extends _BaseEntity {


  @Column()
  filial: boolean;


  @Column()
  razao_social: string;


  @Column()
  nome_fantasia: string;


  @Column()
  cnpj_cpf: string;


  @Column()
  inscricao_estadual: string;


  @Column()
  pessoa_juridica: boolean;


  @Column()
  tipo_natureza_juridica_id: string;


  @Column()
  cnae: string;



  // RELACIONAMENTOS
  @ManyToOne(() => NaturezaJuridicaEntity, { eager: true })
  @JoinColumn({ name: 'tipo_natureza_juridica_id', referencedColumnName: '_id' })
  grupo: NaturezaJuridicaEntity





}

@Entity()
export class PessoaEntityDto extends PessoasEntity { }





