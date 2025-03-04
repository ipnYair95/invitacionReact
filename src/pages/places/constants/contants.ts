import { IMG } from '../../../assets';
export interface IPlace {
    reason: string;
    time: string;
    placeName: string;
    address: string;
    url: string;
    img: any;
}

export const PLACES: IPlace[] = [   
    {
        reason: 'Fiesta',
        time: '3:00 p.m.',
        placeName: 'Salón de fiestas Marginata',
        address: '56535, C. Palmera de la Jalea #312, Hacienda Las Palmas I y II, 56535 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.743032099477!2d-98.88745310938135!3d19.30592800798463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e565e3b6b67%3A0xa16f8aad80a866a0!2sSal%C3%B3n%20de%20fiestas%20marginata!5e0!3m2!1ses-419!2smx!4v1741046729198!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


