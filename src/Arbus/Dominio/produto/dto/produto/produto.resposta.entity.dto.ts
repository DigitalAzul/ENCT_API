import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../../comuns/interfaces/_BaseEntityType';



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
  referencia: string;


  @Column()
  peso_bruto: string;


  @Column()
  peso_liquido: string;


  @Column()
  situacao: string;


  @Column()
  tipo_produto: string;


  @Column()
  temp_max_conservacao: string;




}
