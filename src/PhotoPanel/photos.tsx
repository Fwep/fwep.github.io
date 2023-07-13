const breakpoints = [1920, 1600, 1366, 1024, 768, 640];

const files = [
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/hawaii",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/waterfall",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/loki_and_luna",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/mclaren",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/family",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/tools",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/tree_clouds",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/yosemite",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/fog_tree",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/mosque",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/tim",
    height: 2880,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/dubai",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/thornton",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/moon",
    height: 1080,
    width: 1920,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/abu_dhabi",
    height: 1080,
    width: 1920,
  },
];

const photos = files.map((photo, idx) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.src + `_${photo.width}.JPG`,
    height: height,
    width: width,
    sizes: "(max-width: 768px) 100vw, 80vw",
    srcSet: breakpoints.map((breakpoint) => {
      const src = photo.src + `_${breakpoint}.JPG`;
      return {
        src: src,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
