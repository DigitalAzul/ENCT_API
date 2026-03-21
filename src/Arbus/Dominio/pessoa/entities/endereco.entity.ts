import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { _BaseEntity } from "../../comuns/interfaces/_BaseEntityType";
import { _BaseObjectType } from "../../comuns/interfaces/_BaseObjectType";
import { PessoasEntity } from "./pessoa.entity";

enum TIPO_ENDERECO {
  "GERAL" = "GERAL",
  "LOGISTICA" = "LOGISTICA",
  "COBRANÇA" = "COBRANÇA",
  "FISCO" = "FISCO",
}

@Entity({ name: "endereco" })
export class EnderecoEntity extends _BaseEntity {
  @Column({
    type: "enum",
    enum: TIPO_ENDERECO,
    default: TIPO_ENDERECO.GERAL,
  })
  tipo: TIPO_ENDERECO;

  // @Column()
  // titulo: string;

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

  @Column()
  pessoafj_id: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.enderecos)
  pessoafj: PessoasEntity;
}

@ObjectType()
export class EnderecoBase {
  @Field()
  tipo: TIPO_ENDERECO;

  @Field()
  cep: string;

  @Field()
  numero: string;

  @Field()
  logradouro: string;

  @Field()
  bairro: string;

  @Field()
  cidade: string;

  @Field()
  uf: string;

  @Field()
  pais: string;

  @Field()
  cod_municipio: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  pessoa_id: string;
}

@ObjectType()
export class EnderecoBaseComCabecalho extends _BaseObjectType {
  @Field()
  tipo: TIPO_ENDERECO;

  @Field()
  cep: string;

  @Field()
  numero: string;

  @Field()
  logradouro: string;

  @Field()
  bairro: string;

  @Field()
  cidade: string;

  @Field()
  uf: string;

  @Field()
  pais: string;

  @Field()
  cod_municipio: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  pessoa_id: string;
}

@ObjectType()
export class EnderecoDto extends EnderecoBaseComCabecalho {}

@InputType()
export class EnderecoInputBase {
  @Field()
  tipo: TIPO_ENDERECO;

  @Field()
  cep: string;

  @Field()
  numero: string;

  @Field()
  logradouro: string;

  @Field()
  bairro: string;

  @Field()
  cidade: string;

  @Field()
  uf: string;

  @Field()
  pais: string;

  @Field()
  cod_municipio: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  pessoa_id: string;
}
@InputType()
export class EnderecoArgs extends EnderecoInputBase {}
