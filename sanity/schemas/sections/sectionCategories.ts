import {defineField, defineType} from 'sanity'

const sectionCategories = defineType({
  title: 'Categories Section',
  name: 'sectionCategories',
  type: 'object',
  fields: [
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}, weak: true}],
    }),
    defineField({
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      initialValue: 'Shop',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      categories: 'categories',
    },
    prepare: ({categories}) => {
      return {
        title: 'Categories',
        subtitle: `${categories.length} categories`,
      }
    },
  },
})

export default sectionCategories
