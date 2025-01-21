import { SECTIONS } from "../../../constants";

export interface INavItem{
    title: string;
    section: SECTIONS;
}

export const navItems: INavItem[] = [
    {  title: 'Inicio', section: SECTIONS.HOME  },
    {  title: 'Hola', section: SECTIONS.SUMMARY  },
    {  title: 'Recuerdos', section: SECTIONS.SLIDES  },
    {  title: 'Agradecimientos', section: SECTIONS.DEDICATIONS  },
    {  title: 'Ubicaciones', section: SECTIONS.PLACES  },
    {  title: '¿Qué traer?', section: SECTIONS.GIFS  },
];