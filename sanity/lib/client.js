import { createClient } from 'next-sanity'

const config = {
    dataset: 'production',
    projectId: 'bjxwhb2e',
    useCdn: false,
    apiVersion: '2024-07-09'
}
const client = createClient(config)

export default client