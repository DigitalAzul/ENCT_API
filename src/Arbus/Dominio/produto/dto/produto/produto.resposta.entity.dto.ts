import { ESCALA_TEMRATURA_ENUM, SITUACAO_PRODUTO } from 'src/Arbus/Dominio/comuns/types/Produto.types';
import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../../entities/produto-classificacoa/produto-classificacao-enum';



@Entity()
export class ProdutoRespostaEntityDto extends _BaseEntityType {

  @Column()

  @Column()
  produto_marcaId: string;

  @Column()
  produto_grupoId: string;

  @Column()
  produto_sub_grupoId: string;

  @Column()
  sigla_unidade_primariaId: string;

  @Column()
  fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria

  @Column()
  ha_segunda_unidade: boolean;

  @Column()
  codigo_produto: string;

  @Column()
  licenca_anvisa_num: string;

  @Column()
  data_validade_licenca_anvisa: string;

  @Column()
  referencia: string; // perguntar

  @Column()
  peso_bruto: GLfloat;

  @Column()
  peso_liquido: GLfloat;

  @Column(
    {
      type: "enum",
      enum: SITUACAO_PRODUTO,
      default: SITUACAO_PRODUTO.ATIVO
    }
  )
  situacao: SITUACAO_PRODUTO; // perguntar

  @Column(
    {
      type: "enum",
      enum: PRODUTO_CLASSIFICACAO_ENUN,
      default: PRODUTO_CLASSIFICACAO_ENUN.REVENDA
    }
  )
  classificacao: PRODUTO_CLASSIFICACAO_ENUN; // REVENDA | CONSUMO fazer outra tabela

  @Column(
    {
      type: "enum",
      enum: ESCALA_TEMRATURA_ENUM,
      default: ESCALA_TEMRATURA_ENUM.NAO_APLICADO
    },
  )
  escala_temperatura: ESCALA_TEMRATURA_ENUM;

  @Column({ nullable: true })
  sigla_unidade_secundariaId?: string;

  @Column({ nullable: true })
  fator_conversao_secundaria?: number; // define o valor de multiplacação entre unidades secundaria

  //
  // NAO OBRIGATORIOS
  //
  @Column({ nullable: true })
  codigo_ncm?: string;

  @Column({ nullable: true })
  codigo_rms?: string;

  @Column({ nullable: true })
  descricao?: string;

  @Column({ nullable: true })
  descricao_tecnica?: string;

  @Column({ nullable: true })
  observacoes?: string;

  @Column({ nullable: true })
  imagem?: string;

  @Column({ nullable: true })
  temp_max_conservacao?: GLfloat;

  @Column({ nullable: true })
  temp_min_conservacao?: GLfloat;




}
