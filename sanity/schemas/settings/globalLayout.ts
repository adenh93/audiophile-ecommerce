import {defineField, defineType} from 'sanity'

const globalLayout = defineType({
  title: 'Global Layout',
  name: 'globalLayout',
  type: 'document',
  fields: [
    defineField({
      title: 'Header',
      name: 'header',
      type: 'header',
    }),
    defineField({
      title: 'Footer',
      name: 'footer',
      type: 'footer',
    }),
  ],
})

export default globalLayout
