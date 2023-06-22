const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const files = [
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DJI_0279-HDR-2.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC00090.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC04200.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC05259.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC05426.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC05503.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC05658.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC08373-Edit.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC08746.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC09010-HDR.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC09391.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC09679.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/DSC09964.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/File528.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "https://taran-cacacho-website-photos.s3.us-west-1.amazonaws.com/StarStaX_DSC09669-DSC09252_gap_filling.jpg",
    height: 1080,
    width: 720,
  },
];

const photos = files.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.src,
    height: width,
    width: height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
