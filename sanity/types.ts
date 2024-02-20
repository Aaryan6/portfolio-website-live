export type Posts = {
  _id: string;
  title: string;
  slug: any;
  body: any;
  categories: string;
  mainImage: any;
  publishedAt: Date;
};

// export type Project = {
//   _id: string;
//   title: string;
//   slug: any;
//   thumbnail: any;
//   icon: any;
//   publishedAt: any;
//   tag: string;
//   details: any;
//   url: string;
//   urls: any;
//   description: string;
// };

export type Project = {
  title?: string;
  description?: string;
  icon?: string;
  thumbnail?: string;
  web_url?: string;
  github_url?: string;
  priority?: string;
  details?: {
    text: { content: "MetaSource" };
    annotations: {
      bold: true;
      italic: false;
      strikethrough: false;
      underline: false;
      code: false;
      color: "default";
    };
  }[];
  slug?: string;
  release_date?: string;
  rank?: number;
};
