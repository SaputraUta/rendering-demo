import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute() {
    const server = serverSideFunction();
      return (
        <div>
            <p>{server}</p>
            <ImageSlider />
        </div>
      );
  }
  