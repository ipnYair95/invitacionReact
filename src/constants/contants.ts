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
	{ "id": 1, "name": "Chema", "quantity": 3 },
	{ "id": 2, "name": "Noel", "quantity": 7 },
	{ "id": 3, "name": "Alejandro ", "quantity": 2 },
	{ "id": 4, "name": "Karina", "quantity": 3 },
	{ "id": 5, "name": "Azucena", "quantity": 2 },
	{ "id": 6, "name": "Sara", "quantity": 3 },
	{ "id": 7, "name": "Pushi", "quantity": 3 },
	{ "id": 8, "name": "Ivan", "quantity": 1 },
	{ "id": 9, "name": "Lourdes", "quantity": 2 },
	{ "id": 10, "name": "Margarita Ayuso", "quantity": 2 },
	{ "id": 11, "name": "Brayan Alexis", "quantity": 2 },
	{ "id": 12, "name": "Wendy", "quantity": 1 },
	{ "id": 13, "name": "Familia Marin", "quantity": 11 },
	{ "id": 14, "name": "Familia Brum", "quantity": 4 },
	{ "id": 15, "name": "Fernanda", "quantity": 1 },
	{ "id": 16, "name": "Odon", "quantity": 1 },
	{ "id": 17, "name": "Julio", "quantity": 2 },
	{ "id": 18, "name": "Ricardo", "quantity": 2 },
	{ "id": 19, "name": "Yatziri", "quantity": 1 },
	{ "id": 20, "name": "Venecia", "quantity": 6 },
	{ "id": 21, "name": "Lilia ", "quantity": 10 },
	{ "id": 22, "name": "Veronica", "quantity": 2 },
	{ "id": 23, "name": "Brisa", "quantity": 5 },
	{ "id": 24, "name": "Gladis", "quantity": 2 },
	{ "id": 25, "name": "Devhora", "quantity": 2 },
	{ "id": 26, "name": "Alejandra", "quantity": 1 },
	{ "id": 27, "name": "Tella", "quantity": 1 },
	{ "id": 28, "name": "Ruby", "quantity": 2 },
	{ "id": 29, "name": "Cindy", "quantity": 4 },
	{ "id": 30, "name": "Gustavo", "quantity": 0 },
	{ "id": 31, "name": "Alexa", "quantity": 1 },
	{ "id": 32, "name": "Angelica", "quantity": 1 },
	{ "id": 33, "name": "Arturo", "quantity": 1 },
	{ "id": 34, "name": "Diego", "quantity": 1 },
	{ "id": 35, "name": "Marco", "quantity": 3 },
	{ "id": 36, "name": "Yuli", "quantity": 2 },
	{ "id": 37, "name": "Claudia", "quantity": 2 },
	{ "id": 38, "name": "Monserrat Contreras", "quantity": 2 },
	{ "id": 39, "name": "Mary", "quantity": 1 },
	{ "id": 40, "name": "Erick", "quantity": 1 }
]
