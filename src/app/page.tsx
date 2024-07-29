import Image from "next/image";
import { getContentData } from "../../sanity/lib/fetch";

export default async function Home() {
  const data = await getContentData()
  const {content} = data
  console.log(data)
  const {description,logo,email} = content

  return (
    <div className="w-screen h-screen px-9 py-10 flex flex-col justify-between">
      <p className="text-5xl text-grey-blue leading-close">{description}</p>
      <a href={`mailto:${email}`}><Image className="w-full" src={logo.asset.url} alt="Sally-Ann Dale logo" height={logo.asset.metadata.dimensions.height} width={logo.asset.metadata.dimensions.width} /></a>
    </div>
  );
}
