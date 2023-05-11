import {defineField, defineType} from 'sanity'

const sectionProductCallToAction = defineType({
  title: 'Call To Action',
  name: 'sectionCallToAction',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      hidden: ({parent}) => parent.size !== 'Large',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
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
      subtitle: 'title',
      size: 'size',
      media: 'image',
    },
    prepare: ({subtitle, size, media}) => ({
      title: `Call To Action`,
      subtitle: `${size} - ${subtitle}`,
      media,
    }),
  },
})

export default sectionProductCallToAction
