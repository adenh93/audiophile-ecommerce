import {defineArrayMember, defineField, defineType} from 'sanity'

const navigation = defineType({
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [defineArrayMember({type: 'link'}), defineArrayMember({type: 'internal'})],
    }),
  ],
})

export default navigation
