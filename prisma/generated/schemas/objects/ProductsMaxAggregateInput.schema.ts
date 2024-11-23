import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsMaxAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        image_url: z.literal(true).optional(),
        name: z.literal(true).optional(),
        status: z.literal(true).optional(),
        price: z.literal(true).optional(),
        stock: z.literal(true).optional(),
        available_at: z.literal(true).optional(),
    })
    .strict();

export const ProductsMaxAggregateInputObjectSchema = Schema;
