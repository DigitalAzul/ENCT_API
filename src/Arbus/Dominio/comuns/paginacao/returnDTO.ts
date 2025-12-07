import { Column, Entity } from "typeorm";
import { PessoaEntityDto } from "../../pessoa/entities/pessoa.entity";


@Entity()
export class PaginatedResponse {
    @Column()
    totalItems: number;

    @Column()
    items: PessoaEntityDto[];

    @Column()
    page: number;

    @Column()
    size: number;
};

