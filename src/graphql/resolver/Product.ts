import { objectType, extendType } from 'nexus';

import { NexusGenObjects } from '../../../nexus.typegen';

export const ProductType = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nonNull.float('price');
  },
});

let products: NexusGenObjects['Product'][] = [
  {
    id: 1,
    name: ' Product 1',
    price: 21.25,
  },
  {
    id: 2,
    name: ' Product 2',
    price: 21.25,
  },
];

export const ProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('products', {
      type: 'Product',
      resolve(_parent, _args, _context, _info) {
        return products;
      },
    });
  },
});
