import {defineField, defineType} from 'sanity'

const productPage = defineType({
  title: 'Product Page',
  name: 'productPage',
  type: 'document',
  fields: [
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'sections',
    }),
  ],
})

export default productPage
