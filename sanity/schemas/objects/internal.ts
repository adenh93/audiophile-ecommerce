import {defineField, defineType} from 'sanity'

const internal = defineType({
  title: 'Internal',
  description: 'Link to pages, categories, products, etc.',
  name: 'internal',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'reference',
      to: [{type: 'product'}, {type: 'category'}],
      weak: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default internal
