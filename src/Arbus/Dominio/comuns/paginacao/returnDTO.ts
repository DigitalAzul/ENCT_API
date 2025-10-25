import { Field, ObjectType } from "@nestjs/graphql";
import { PessoaDto } from "../../pessoa/dto/pessoa.dto";

@ObjectType()
export class PaginatedResponse {
    @Field()
    totalItems: number;

    @Field(() => [PessoaDto])
    items: PessoaDto[];

    @Field()
    page: number;

    @Field()
    size: number;
};

