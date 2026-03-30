import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Membro del team',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role', title: 'Ruolo', type: 'string' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' }
  }
})
