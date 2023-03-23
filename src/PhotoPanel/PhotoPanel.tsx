import { ReactElement, useState } from "react";

import { PhotoAlbum } from "react-photo-album";
import LightBox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import photos from "./photos";
import "yet-another-react-lightbox/styles.css";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
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
      />
      <LightBox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
    </>
  );
}
