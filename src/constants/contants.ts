export enum SECTIONS {
    HOME = 'HOME',
    DEDICATIONS = 'DEDICATIONS',
    GIFS = 'GIFS',
    PLACES = 'PLACES',
    SLIDES = 'SLIDES',
    SUMMARY = 'SUMMARY',
    PEOPLE = 'PEOPLE'
}

export interface IDataBase {
    id: number;
    name: string;
    quantity: number;
}

export const DATABASE: IDataBase[] = [
    { "id": 1, "name": "Yair", "quantity": 2 }, { "id": 2, "name": "Yazmin", "quantity": 1 }, { "id": 3, "name": "Daniel", "quantity": 3 }
];
