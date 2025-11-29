
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ESCALA_TEMRATURA_ENUM, SITUACAO_PRODUTO } from '../../../comuns/types/ProdutoTypes';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../produto-classificacoa/produto-classificacao-enum';
import { ProdutoSubGrupoEntity } from '../produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from '../produto-grupo/produto-grupo.entity';
import { ProdutoMarcaEntity } from '../produto-marca/produto-marca.entity';
import { ProdutoUnidadeSiglaEntity } from '../produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';



@Entity({ name: 'produto' })
export class ProdutoEntity extends _BaseEntityType {



  @Column()
  produto_marcaId: string;

  @Column()
  produto_grupoId: string;

  @Column()
  produto_sub_grupoId: string;

  @Column()
  sigla_unidade_primariaId: string;

  @Column({ type: 'numeric' })
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

  @Column({ type: 'numeric' })
  peso_bruto: number;

  @Column({ type: 'numeric' })
  peso_liquido: number;

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

  @Column({ type: 'numeric', nullable: true })
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

  @Column({ type: 'numeric', nullable: true })
  temp_max_conservacao?: number;

  @Column({ type: 'numeric', nullable: true })
  temp_min_conservacao?: number;


  // RELACIONAMENTOS

  @OneToOne(() => ProdutoGrupoEntity, { eager: true })
  @JoinColumn({ name: 'produto_grupoId' })
  // @OneToMany(() => ProdutoGrupoEntity, (grupo) => grupo.produtos)
    // @JoinColumn({ name: 'produto_grupoId' })
  grupo: ProdutoGrupoEntity

  // @OneToOne(() => ProdutoSubGrupoEntity, { eager: true })
  // @JoinColumn({ name: 'produto_sub_grupoId' })
  @OneToMany(() => ProdutoSubGrupoEntity, (subgrupo) => subgrupo.produtos)
  @JoinColumn({ name: 'produto_sub_grupoId' })
  subgrupo: ProdutoSubGrupoEntity

  //@OneToOne(() => ProdutoMarcaEntity, { eager: true })
  @OneToMany(() => ProdutoMarcaEntity, (marca) => marca.produtos)
  @JoinColumn({ name: 'produto_marcaId' })
  marca: ProdutoMarcaEntity

  // UNIDADE DE MEDIDA
  // @OneToOne(() => ProdutoUnidadeSiglaEntity, { eager: true })
  @OneToMany(() => ProdutoUnidadeSiglaEntity, (sigla) => sigla.produtos)
  @JoinColumn({ name: 'sigla_unidade_primariaId' })
  sigla_primaria: ProdutoUnidadeSiglaEntity


  @OneToMany(() => ProdutoUnidadeSiglaEntity, (sigla) => sigla.produtos)
  @JoinColumn({ name: 'sigla_unidade_secundariaId' })
  sigla_secundaria: ProdutoUnidadeSiglaEntity
  // RELACIONAMENTOS


  // // TRIBUTARIO
  // @Column()
  // CodigoEspecificadorST: string;

  // @Column()
  // IsentoPIS: string;

  // @Column()
  // IsentoCOFINS: string;

  // @Column()
  // ClassificacaoFiscal: string;

  // @Column()
  // CodigoProdutoDCB: string;

  // @Column()
  // SituacaoTributariaPISEnt: string;

  // @Column()
  // SituacaoTributariaPIS: string;

  // @Column()
  // SituacaoTributariaCOFINSEnt: string;

  // @Column()
  // SituacaoTributariaCOFINS: string;

  // @Column()
  // PercentualTributacaoPis: string;

  // @Column()
  // PercentualTributacaoCofins: string;

  // @Column()
  // PercentualTribIBPTNacional: string;


  // @Column()
  // PercentualTribIBPTImportado: string


}
