export type T_Show = {
  id: number;
  image: T_Image;
  name: string;
  language: string;
  runtime: {
    average: number;
  };
  genres: string[];
  summary: string;
};

type T_Image = {
  original: string;
};

type T_RunTime = {
  average: number;
};

export type T_EPISODE = {
  name: string;
  season: string;
  image: T_Image;
  runtime: {
    average: number;
  };
};
