import { IMG } from '../../../assets';

export interface IGif {
    title: string;
    img: any;
}

export const GIFS: IGif[] = [
    { title: "Venir guapo", img: IMG.HANDSOME },
    { title: "Con ganas de bailar", img: IMG.PARTY },
    { title: "Mi regalo uwu", img: IMG.GIF },
    { title: "No se llevan borrachos a domicilio", img: IMG.JOKE },
];