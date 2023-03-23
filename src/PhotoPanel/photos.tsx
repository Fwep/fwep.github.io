const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const files = [
  {
    src: "/assets/images/01.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/02.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/03.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/04.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/05.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/06.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/07.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/08.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/09.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/10.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/11.jpg",
    height: 720,
    width: 1080,
  },
  {
    src: "/assets/images/12.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/13.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/14.jpg",
    height: 1080,
    width: 720,
  },
  {
    src: "/assets/images/15.jpg",
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
