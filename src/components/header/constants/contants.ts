import { SECTIONS } from "../../../constants/contants";

export interface INavItem{
    title: string;
    section: SECTIONS;
}

export const navItems: INavItem[] = [
    {  title: 'Inicio', section: SECTIONS.HOME  },
    {  title: 'Bienvenido', section: SECTIONS.SUMMARY  },
    {  title: 'Recuerdos', section: SECTIONS.SLIDES  },
    {  title: 'Agradecimientos', section: SECTIONS.DEDICATIONS  },
    {  title: 'Ubicaciones', section: SECTIONS.PLACES  },
    {  title: 'Requisitos', section: SECTIONS.GIFS  },
];