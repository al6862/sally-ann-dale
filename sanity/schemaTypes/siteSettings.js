import { defineField, defineType } from "sanity"
import {CogIcon as icon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Your website’s name.',
      validation: Rule => Rule.max(50).warning('Should be under 50 characters.'),
    }),

    defineField({
      name: 'description',
      type: 'string',
      description:
        'A short summary to get people an idea of what to expect when visiting your website.',
      validation: Rule => Rule.max(150).warning('Should be under 150 characters.'),
    }),

    defineField({
      title: 'Website URL',
      name: 'url',
      type: 'url',
      description: 'The address people will type in to get to your website.',
    }),

    defineField({
      name: 'keywords',
      type: 'array',
      description: 'Add keywords that describes your website.',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    defineField({
      name: 'socialImage',
      type: 'image',
      description:
        'This image is the first thing people will see when someone shares your website. Recommended size 1200x630 (will be auto resized).',
    }),

    defineField({
      name: 'favicon',
      type: 'image',
      options: { accept: 'image/png' },
      description: '512x512 PNG file required (will be auto resized).',
    }),
  ],
})