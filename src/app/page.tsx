import Image from "next/image";
import { getContentData } from "../../sanity/lib/fetch";

export default async function Home() {
  const data = await getContentData()
  const {content} = data
  const {description,logo} = content

  return (
    <div >
      <p>{description}</p>
      <Image src={logo.asset.url} alt="Sally-Ann Dale logo" height={logo.asset.metadata.dimensions.height} width={logo.asset.metadata.dimensions.width} />
    </div>
  );
}
