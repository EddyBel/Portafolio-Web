export type YoAPIAuth = {
  msg: string;
  tocken: string | null;
};

export type YoAPIBiographyContent = {
  content: string[];
  section: string;
};

export type YoAPIBiography = {
  msg: string;
  body: YoAPIBiographyContent[];
};

export type YoAPIProyectContent = {
  name: string;
  background: string;
  description: string;
  github: string;
  web?: string;
};

export type YoAPIProyects = {
  msg: string;
  body: YoAPIProyectContent[];
};
