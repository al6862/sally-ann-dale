export const contentQuery = `{
  'content': *[_type == 'content'][0]{
      ...,
      logo {
        asset->
      },
  }
}`
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