export interface ListItem {
  id: string;
  imgUrl: string;
  desc?: string;
  title?: string;
}

export interface Response<T> {
  ret: boolean;
  data: T;
}

export interface City {
  id: number;
  name: string;
  spell: string;
}

export interface AlphabetCities {
  [key: string]: City[];
}
