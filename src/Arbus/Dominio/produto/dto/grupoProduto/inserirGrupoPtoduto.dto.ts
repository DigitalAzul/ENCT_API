import { Field, InputType, PartialType } from '@nestjs/graphql';
import { _BaseObjectTypeSchema } from '../../../comuns/interfaces/_BaseSchemaType';



@InputType()
export class InserirGrupoProdutoDto extends _BaseObjectTypeSchema {


  @Field()
  titulo: string;


  @Field()
  descricao: string;

}

@InputType()
export class InserirGrupoProdutoArgs {


  @Field()
  titulo: string;


  @Field()
  descricao: string;

}

@InputType()
export class EditaGrupoProdutoArgs extends PartialType(InserirGrupoProdutoDto) { }
