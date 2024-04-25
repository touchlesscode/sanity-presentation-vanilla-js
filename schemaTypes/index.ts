import {defineField, defineType} from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'pageTest',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
      }),
      defineField({
        name: 'body',
        type: 'text',
      }),
    ],
  }),
]
