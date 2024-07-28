import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import deskStructure from './sanity.deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Sally-Ann Dale',

  projectId: 'bjxwhb2e',
  dataset: 'production',
  basePath: "/studio",

  plugins: [structureTool(deskStructure), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
