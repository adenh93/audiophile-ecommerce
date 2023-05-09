import {defineType, defineField, defineArrayMember} from 'sanity'

const footer = defineType({
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    defineField({
      title: 'Navigation',
      name: 'navigation',
      type: 'reference',
      to: {type: 'navigation'},
      weak: true,
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
      initialValue: 'Copyright 2021. All Rights Reserved.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'socialLink'}, weak: true})],
    }),
  ],
})

export default footer
