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

export type YoAPINote = {
  api_url_content: string;
  matter: string;
  metadata: any;
  name: string;
  url: string;
  url_content: string;
};

export type YoAPIAllNotes = {
  msg: string;
  body: {
    notes: YoAPINote[];
    number_notes: number;
  };
};

export type YoAPIContentNote = {
  msg: string;
  body: {
    content: string;
    metadata: any;
    raw_content: string;
    note: string;
    matter: string;
  };
};
