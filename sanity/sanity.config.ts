import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'tracce-studio',
  title: 'Tracce Studio',
  projectId: 'v89xdrb0',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
