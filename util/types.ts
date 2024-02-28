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
