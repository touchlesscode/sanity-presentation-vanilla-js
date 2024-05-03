import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'Plain JS Presentation',

  projectId: 'ju3h49o8',
  dataset: 'exo-rambutan',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: 'http://localhost:8787',
      // previewUrl: 'http://localhost:5500/html/index.html',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
