import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import deskStructure from './sanity.deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Sally-Ann Dale',

  projectId: 'bjxwhb2e',
  dataset: 'production',
  basePath: "/studio",

  plugins: [structureTool(deskStructure), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
