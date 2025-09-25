import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { ProdutoSubGrupoEntity } from '../produto-grupo-sub/produto-sub-grupo.entity';
import { ProdutoGrupoEntity } from '../produto-grupo/produto-grupo.entity';
import { ProdutoUnidadeMedidaEntity } from '../produto-unidade-medida/produto-unidade-medida.entity';



@Entity({ name: 'produto' })
export class ProdutoEntity extends _BaseEntityType {

  @OneToOne(() => ProdutoGrupoEntity)
  @JoinColumn()
  grupo: ProdutoGrupoEntity

  @Column()
  produto_grupoId: string;


  @OneToOne(() => ProdutoSubGrupoEntity)
  @JoinColumn()
  subgrupo: ProdutoSubGrupoEntity

  @Column()
  produto_sub_grupoId: string;


  @OneToOne(() => ProdutoUnidadeMedidaEntity)
  @JoinColumn()
  unidade_medida: ProdutoUnidadeMedidaEntity

  @Column()
  unidade_medidaId: string;




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


  // @Column()
  // grupo_produto_id: string;


  // @Column()
  // sub_grupo_produto_id: string;


  @Column()
  marca_produto_id: string;


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
  situacao: string; // perguntar


  @Column()
  tipo_produto: string; // REVENDA | CONSUMO fazer outra tabela


  @Column()
  temp_max_conservacao: string;



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
