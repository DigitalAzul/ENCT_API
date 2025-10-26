import { SITUACAO_PRODUTO } from 'src/Arbus/Dominio/comuns/types/TProduto';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../produto-classificacoa/produto-classificacao-enum';
import { ProdutoSubGrupoEntity } from '../produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from '../produto-grupo/produto-grupo.entity';
import { ProdutoMarcaEntity } from '../produto-marca/produto-marca.entity';
import { ProdutoUnidadeSiglaEntity } from '../produto-sigla-unidade-medida/produto-sigla-unidade-medida.entity';



@Entity({ name: 'produto' })
export class ProdutoEntity extends _BaseEntityType {

  @OneToOne(() => ProdutoGrupoEntity, { eager: true })
  @JoinColumn({ name: 'produto_grupoId' })
  grupo: ProdutoGrupoEntity

  @Column()
  produto_grupoId: string;


  @OneToOne(() => ProdutoSubGrupoEntity, { eager: true })
  @JoinColumn({ name: 'produto_sub_grupoId' })
  subgrupo: ProdutoSubGrupoEntity

  @Column()
  produto_sub_grupoId: string;


  @OneToOne(() => ProdutoMarcaEntity, { eager: true })
  @JoinColumn({ name: 'produto_marcaId' })
  marca: ProdutoMarcaEntity

  @Column()
  produto_marcaId: string;


  // UNIDADE DE MEDIDA
  @OneToOne(() => ProdutoUnidadeSiglaEntity, { eager: true })
  @JoinColumn({ name: 'sigla_unidade_primariaId' })
  sigla_primaria: ProdutoUnidadeSiglaEntity

  @Column()
  sigla_unidade_primariaId: string;

  @OneToOne(() => ProdutoUnidadeSiglaEntity, { eager: true })
  @JoinColumn({ name: 'sigla_unidade_secundariaId' })
  sigla_secundaria: ProdutoUnidadeSiglaEntity

  @Column()
  sigla_unidade_secundariaId: string;

  @Column({ type: 'float' })
  fator_conversao_primaria: number; // define o valor de multiplacação entre unidades primaria

  @Column()
  ha_segunda_unidade: boolean;

  @Column({ type: 'float' })
  fator_conversao_secundaria: number; // define o valor de multiplacação entre unidades secundaria


  @Column()
  codigo_produto: string;


  @Column()
  codigo_ncm: string;


  @Column()
  codigo_rms: string;


  @Column()
  licenca_anvisa_num: string;


  @Column()
  data_validade_licenca_anvisa: string;


  @Column()
  descricao: string;


  @Column()
  descricao_tecnica: string;


  @Column()
  observacoes: string;


  @Column()
  imagem: string;


  @Column()
  referencia: string; // perguntar


  @Column()
  peso_bruto: string;


  @Column()
  peso_liquido: string;


  @Column()
  situacao: SITUACAO_PRODUTO; // perguntar


  @Column()
  classificacao: PRODUTO_CLASSIFICACAO_ENUN; // REVENDA | CONSUMO fazer outra tabela


  @Column()
  temp_max_conservacao: string;


  @Column()
  temp_min_conservacao: string;



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
