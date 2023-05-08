import {defineField, defineType} from 'sanity'

const productInclude = defineType({
  title: 'Product Include',
  name: 'productInclude',
  type: 'object',
  fields: [
    defineField({
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      title: 'Item',
      name: 'item',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      quantity: 'quantity',
      item: 'item',
    },
    prepare: ({quantity, item}) => ({title: `${quantity}x ${item}`}),
  },
})

export default productInclude
