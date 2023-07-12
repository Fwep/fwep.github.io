import LightBox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { ReactElement, useState } from "react";
import Image from "./Photo";

import photos from "./photos";
import "yet-another-react-lightbox/styles.css";

const slides = photos.map(({ src, width, height, srcSet }) => ({
  src,
  width,
  height,
  srcSet: srcSet.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

export function PhotoPanel(): ReactElement {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {photos.map((photo, idx) => {
        const photoSrcSet = photo.srcSet
          .map((src) => `${src.src} ${src.width}w`)
          .join(", ");

        return (
          <Image
            key={idx}
            src={photo.src}
            height={photo.height}
            width={photo.width}
            sizes={photo.sizes}
            srcSet={photoSrcSet}
            onClick={() => setIndex(idx)}
          />
        );
      })}
      <LightBox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Slideshow]}
      />
    </>
  );
}
