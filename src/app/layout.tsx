import type { Metadata } from "next";
import "./globals.css";
import { getSiteSettingsData } from "../../sanity/lib/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteSettingsData()
  console.log(data)
  const {siteSettings} = data
  const {title, description, url, keywords, socialImage, favicon} = siteSettings

  return {
    title,
    description,
    metadataBase: url,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: [
        {
          url: socialImage.asset.url,
          width: socialImage.asset.metadata.dimensions.width,
          height: socialImage.asset.metadata.dimensions.height,
        },
      ],
    },
    icons: {
      icon: favicon.asset.url,
      shortcut: favicon.asset.url,
      apple: favicon.asset.url,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}