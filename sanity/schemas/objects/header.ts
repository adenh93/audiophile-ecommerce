import {defineField, defineType} from 'sanity'

const header = defineType({
  title: 'Header',
  name: 'header',
  type: 'object',
  fields: [
    defineField({
      title: 'Navigation',
      name: 'navigation',
      type: 'reference',
      to: {type: 'navigation'},
      weak: true,
    }),
  ],
})

export default header
