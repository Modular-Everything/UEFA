import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Kazakhstan-Slide.jpg";

export default {
  name: "kazakhstan",
  title: "Slide — Kazakhstan",
  type: "object",
  fields: [
    {
      name: "video",
      title: "Slide Video",
      type: "url",
      description: "A link to a Vimeo video",
    },
  ],
  preview: {
    prepare: () => ({
      title: "Embedded Video",
      subtitle: "Slide Type: Kazakhstan",
      media: (
        <img
          src={Thumbnail}
          alt="Kazakhstan Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
