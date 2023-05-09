import {defineField, defineType} from 'sanity'

const homePage = defineType({
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'sections',
    }),
  ],
})

export default homePage
