import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';
import { PRODUTO_CLASSIFICACAO_ENUN } from '../../entities/produto-classificacoa/produto-classificacao-enum';



@Entity()
export class ProdutoRespostaEntityDto extends _BaseEntityType {

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
  produto_grupoId: string;


  @Column()
  produto_sub_grupoId: string;


  @Column()
  produto_marcaId: string;


  @Column()
  descricao: string;


  @Column()
  descricao_tecnica: string;


  @Column()
  observacoes: string;


  @Column()
  imagem: string;


  @Column()
  referencia: string;


  @Column()
  peso_bruto: string;


  @Column()
  peso_liquido: string;


  @Column()
  situacao: string;


  @Column()
  classificacao: PRODUTO_CLASSIFICACAO_ENUN;


  @Column()
  temp_max_conservacao: string;




}
