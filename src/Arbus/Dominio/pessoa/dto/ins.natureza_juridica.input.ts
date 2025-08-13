import { Field, InputType } from '@nestjs/graphql';



@InputType()
export class InserirNaturezaJuridicaInputDto {
  @Field()
  titulo: string

}