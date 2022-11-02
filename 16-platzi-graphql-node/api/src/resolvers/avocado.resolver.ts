import { createHash } from 'crypto'
import type { Attributes, Avocado, PrismaClient, Prisma } from '@prisma/client';

type ResolverContext = {
  orm: PrismaClient
}

export function findAll(parent: unknown, args: { skip?: number, take?: number, where: Prisma.AvocadoWhereInput }, context: ResolverContext): Promise<Avocado[]> {
  return context.orm.avocado.findMany({
            include: { attributes: true },
            skip: args.skip,
            take: args.take,
            where: args.where
        })
}

export function findOne(parent: unknown, args: { id: string }, context: ResolverContext): Promise<Avocado | null> {
  return context.orm.avocado.findUnique({
      where: { id: parseInt(args.id, 10) },
      include: { attributes: true }
    })
}

export const resolver: Record<keyof (Avocado & {attributes: Attributes}), (parent: Avocado & {attributes: Attributes}) => unknown> = {
  id: (parent) => parent.id,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt,
  deletedAt: (parent) => parent.deletedAt,
  sku: (parent) => parent.sku,
  name: (parent) => parent.name,
  price: (parent) => parent.price,
  image: (parent) => parent.image,
  attributes: (parent) => ({
    description: parent.attributes.description,
    shape: parent.attributes.shape,
    hardiness: parent.attributes.hardiness,
    taste: parent.attributes.taste,
  }),
}

export function createAvo(
  parent: unknown,
  {
    data,
  }: { data: Pick<Avocado, 'name' | 'price' | 'image'> & Attributes },
  context: ResolverContext
): Promise<Avocado> {
  const { name, price, image, ...attributes } = data;

  return context.orm.avocado.create({
    data: {
      name,
      price,
      image,
      sku: new Date().getTime().toString(),
      attributes: {
        create: {
          ...attributes,
        }
      }
    },
  })
}