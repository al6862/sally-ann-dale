import client from './client'
import * as queries from './queries'

export const getContentData = async () => {
    const res = await client.fetch(queries.contentQuery)
  
    return res
};

export const getSiteSettingsData = async () => {
    const res = await client.fetch(queries.siteSettingsQuery)
  
    return res
};