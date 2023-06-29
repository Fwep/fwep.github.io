import { ReactElement, useState } from "react";

import { PhotoAlbum } from "react-photo-album";
import LightBox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
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
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        onClick={({ index }) => setIndex(index)}
        renderPhoto={(props) => <Image {...props} />}
      />
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
