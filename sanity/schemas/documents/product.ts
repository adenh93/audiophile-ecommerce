import {defineArrayMember, defineField, defineType} from 'sanity'

const product = defineType({
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      title: 'New',
      name: 'new',
      type: 'boolean',
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: {type: 'category'},
      weak: true,
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      validation: (Rule) => Rule.length(3),
    }),
    defineField({
      title: 'Features',
      name: 'features',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Includes',
      name: 'includes',
      type: 'array',
      of: [defineArrayMember({type: 'productInclude'})],
    }),
    defineField({
      title: 'Related Products',
      name: 'relatedProducts',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'product'}, weak: true})],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'image',
    },
  },
})

export default product
