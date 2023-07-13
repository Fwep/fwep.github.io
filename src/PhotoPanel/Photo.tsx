import { useState } from "react";

type Props = {
  src: string;
  height: number;
  width: number;
  sizes: string;
  srcSet: string;
  onClick: () => void;
};

export default function Image({
  src,
  height,
  width,
  sizes,
  srcSet,
  onClick,
}: Props): any {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={`placeholder-container${isLoading ? " no-cursor" : ""}`}>
      {isLoading && <div className="placeholder-glimmer" />}
      <img
        alt=""
        className="album"
        draggable={false}
        onError={() => setIsLoading(false)}
        onLoad={() => setIsLoading(false)}
        onContextMenu={(e) => e.preventDefault()}
        onClick={onClick}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
      />
    </div>
  );
}
