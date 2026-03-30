import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Icona (nome)', type: 'string' }),
    defineField({ name: 'shortDesc', title: 'Descrizione breve', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ]
})
