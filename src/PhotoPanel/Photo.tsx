import { useState } from "react";
import { Photo, RenderPhotoProps } from "react-photo-album";

export default function Image({
  photo: { src, height, width },
  renderDefaultPhoto,
  imageProps,
}: RenderPhotoProps<{
  src: string;
  height: number;
  width: number;
  srcSet: {
    src: string;
    width: number;
    height: number;
  }[];
}>): any {
  const [isLoading, setIsLoading] = useState(true);
  const { style, ...restImageProps } = imageProps;
  return (
    <div
      className={`placeholder-container${+isLoading ? " no-cursor" : ""}`}
      style={style}
    >
      {isLoading && <div className="placeholder-glimmer" />}
      <img
        draggable={false}
        onError={() => setIsLoading(false)}
        onLoad={() => setIsLoading(false)}
        onContextMenu={(e) => e.preventDefault()}
        height={height}
        width={width}
        style={isLoading ? { display: "none" } : style}
        {...restImageProps}
      />
    </div>
  );
}
