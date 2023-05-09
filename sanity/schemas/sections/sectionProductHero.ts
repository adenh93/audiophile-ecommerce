import {defineField, defineType} from 'sanity'

const sectionProductHero = defineType({
  title: 'Product Hero',
  name: 'sectionProductHero',
  type: 'object',
  fields: [
    defineField({
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: {type: 'product'},
      weak: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      initialValue: 'See Product',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      productTitle: 'product.title',
      media: 'product.image',
    },
    prepare: ({productTitle, media}) => ({
      title: `Product Hero`,
      subtitle: productTitle,
      media,
    }),
  },
})

export default sectionProductHero
