import {defineField, defineType} from 'sanity'

const sectionProductHero = defineType({
  title: 'Hero',
  name: 'sectionHero',
  type: 'object',
  fieldsets: [{name: 'images', options: {collapsible: true}}],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Overline',
      name: 'overline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image - Desktop',
      name: 'imageDesktop',
      type: 'image',
      fieldset: 'images',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image - Tablet',
      name: 'imageTablet',
      type: 'image',
      fieldset: 'images',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image - Mobile',
      name: 'imageMobile',
      type: 'image',
      fieldset: 'images',
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
      media: 'image',
    },
    prepare: ({subtitle, media}) => ({
      title: `Hero`,
      subtitle: subtitle,
      media,
    }),
  },
})

export default sectionProductHero
