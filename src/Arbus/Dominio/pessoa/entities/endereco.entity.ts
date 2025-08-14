import { Column, Entity } from 'typeorm';
import { _BaseEntityType } from '../../comuns/interfaces/_BaseEntityType';




@Entity({ name: 'endereco' })
export class EnderecoEntity extends _BaseEntityType {

  @Column()
  mercador_id: string;

  @Column()
  titulo: string

  @Column()
  cep: string;

  @Column()
  numero: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  pais: string;

  @Column()
  cod_municipio: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

}