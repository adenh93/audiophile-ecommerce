import {defineField, defineType} from 'sanity'

const socialLink = defineType({
  title: 'Social Link',
  name: 'socialLink',
  type: 'document',
  fields: [
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'link.title',
      subtitle: 'link.url',
      media: 'icon',
    },
  },
})

export default socialLink
