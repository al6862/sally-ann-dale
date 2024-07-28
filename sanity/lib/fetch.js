import client from './client'
import * as queries from './queries'

export const getSiteSettingsData = async () => {
    const res = await client.fetch(queries.siteSettingsQuery)
  
    return res
};