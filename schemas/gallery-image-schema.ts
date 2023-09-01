export const GalleryImagesSchema = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHightLight: true,
      },
    },
  ],
};
