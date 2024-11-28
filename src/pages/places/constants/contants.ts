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
        reason: 'MISA',
        time: '6:40 p.m.',
        placeName: 'Parroquia de San Francisco de Asís',
        address: 'C. Clara Córdoba Manzana 023, Cerro del Tejolote, 56567 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.2839363278061!2d-98.91500584822482!3d19.319915019861966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e71fab4f317%3A0xdf06a232d002b753!2sParroquia%20de%20San%20Francisco%20de%20As%C3%ADs!5e0!3m2!1ses-419!2smx!4v1732763522582!5m2!1ses-419!2smx',
        img: IMG.MISA
    },
    {
        reason: 'FIESTA',
        time: '6:40 p.m.',
        placeName: 'Salon DAFA',
        address: 'C. Marisol Manzana 001, 56565 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.845673364371!2d-98.92176425485397!3d19.332501897429427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e0e9ccd3515%3A0x22b0267851d5035e!2sC.%20Marisol%20Manzana%20001%2C%2056565%20Ixtapaluca%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1732763693395!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


