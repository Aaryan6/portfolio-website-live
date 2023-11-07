export type Posts = {
  _id: string;
  title: string;
  slug: any;
  body: any;
  categories: string;
  mainImage: any;
  publishedAt: Date;
};

export type Project = {
  _id: string;
  title: string;
  slug: any;
  thumbnail: any;
  icon: any;
  publishedAt: any;
  tag: string;
  details: any;
  url: string;
  urls: any;
  description: string;
};
