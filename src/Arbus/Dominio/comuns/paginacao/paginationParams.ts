import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class _Pagination {
    @Field()
    page: number;
    @Field()
    limit: number;
    @Field()
    size: number;
    @Field()
    offset: number;
}

@InputType()
export class _Sorting {
    @Field()
    property: string;
    @Field()
    direction: string;
}


@InputType()
export class _Filtering {
    @Field()
    property: string;
    @Field()
    rule: string;
    @Field()
    value: string;
}

// export const PaginationParams = createParamDecorator((data, ctx: ExecutionContext): Pagination => {
//     const req: Request = ctx.switchToHttp().getRequest();
//     const page = parseInt(req.query.page as string);
//     const size = parseInt(req.query.size as string);

//     // check if page and size are valid
//     if (isNaN(page) || page < 0 || isNaN(size) || size < 0) {
//         throw new BadRequestException('Invalid pagination params');
//     }
//     // do not allow to fetch large slices of the dataset
//     if (size > 100) {
//         throw new BadRequestException('Invalid pagination params: Max size is 100');
//     }

//     // calculate pagination parameters
//     const limit = size;
//     const offset = page * limit;
//     return { page, limit, size, offset };
// });