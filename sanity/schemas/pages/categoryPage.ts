import {defineField, defineType} from 'sanity'

const categoryPage = defineType({
  title: 'Category Page',
  name: 'categoryPage',
  type: 'document',
  fields: [
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'sections',
    }),
  ],
})

export default categoryPage
