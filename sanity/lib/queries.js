export const siteSettingsQuery = `{
    'siteSettings': *[_type == 'siteSettings'][0] {
        ...,
        socialImage {
          asset->
        },
        favicon {
          asset-> {
            url
          }
        }
    }
  }`