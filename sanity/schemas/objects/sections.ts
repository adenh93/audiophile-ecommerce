import {defineField, defineType} from 'sanity'

const sections = defineType({
  title: 'Sections',
  name: 'sections',
  type: 'object',
  fields: [
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'sectionHero'}, {type: 'sectionCallToAction'}, {type: 'sectionCategories'}],
    }),
  ],
})

export default sections
