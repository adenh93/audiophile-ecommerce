import {defineField, defineType} from 'sanity'

const sectionProductCallToAction = defineType({
  title: 'Product Call To Action',
  name: 'sectionProductCallToAction',
  type: 'object',
  fields: [
    defineField({
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: {type: 'product'},
      weak: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Size',
      name: 'size',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['Large', 'Medium', 'Small'],
      },
      initialValue: 'Large',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      hidden: ({parent}) => parent.size !== 'Large',
    }),
    defineField({
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      initialValue: 'See Product',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      productTitle: 'product.title',
      size: 'size',
      media: 'product.image',
    },
    prepare: ({productTitle, size, media}) => ({
      title: `Product Call To Action`,
      subtitle: `${size} - ${productTitle}`,
      media,
    }),
  },
})

export default sectionProductCallToAction
