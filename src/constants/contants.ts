export enum SECTIONS {
  HOME = "HOME",
  DEDICATIONS = "DEDICATIONS",
  GIFS = "GIFS",
  PLACES = "PLACES",
  SLIDES = "SLIDES",
  SUMMARY = "SUMMARY",
  PEOPLE = "PEOPLE",
  TICKET = "TICKET",
}

export interface IDataBase {
  id: number;
  name: string;
  quantity: number;
}

export const DATABASE: IDataBase[] = [
  { "id": 2, "name": "Tu patita", "quantity": 6 }
]
