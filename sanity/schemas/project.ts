import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Progetto',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'coverImage', title: 'Immagine copertina', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Categorie', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text', rows: 4 }),
    defineField({ name: 'url', title: 'URL sito', type: 'url' }),
    defineField({ name: 'publishedAt', title: 'Data pubblicazione', type: 'date' }),
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' }
  }
})
