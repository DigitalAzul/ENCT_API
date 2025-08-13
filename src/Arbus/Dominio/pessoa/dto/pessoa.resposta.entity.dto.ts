import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';
import { NaturezaJuridicaDto } from './natureza_juridica.dto';

@Entity()
export class PessoaRespostaEntityDto extends _BaseEntityType {


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
  tipo_natureza_juridica: NaturezaJuridicaDto;


  @Column()
  cnae: string;
}
