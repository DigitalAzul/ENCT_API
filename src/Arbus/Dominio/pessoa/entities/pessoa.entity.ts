import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';
import { NaturezaJuridicaEntity } from './natureza_juridica.entity';



@Entity({ name: 'pessoas' })
export class PessoasEntity extends _BaseEntityType {

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

  // @Column()
  // tipo_natureza: NaturezaJuridica;

  @OneToOne(() => NaturezaJuridicaEntity)
  @JoinColumn()
  tipo_natureza_juridica: NaturezaJuridicaEntity

  @Column()
  cnae: string;

}


@Entity()
export class PessoaEntityCreateRxDto extends PessoasEntity { }