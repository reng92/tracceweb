import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Configurazione sito',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Titolo sito', type: 'string' }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text', rows: 3 }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Telefono', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', title: 'Piattaforma', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' }
        ]
      }]
    }),
  ]
})
