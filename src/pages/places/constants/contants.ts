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
        reason: 'Misa',
        time: '5:00 p.m.',
        placeName: 'Parroquia del Señor de la Misericordia',
        address: 'Ahuehuete n, Izcalli, 56566 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.285176328166!2d-98.93620459076266!3d19.318606893527008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dc4b2880213%3A0xa6af91eb6f0e78eb!2sParroquia%20del%20Se%C3%B1or%20de%20la%20Misericordia!5e0!3m2!1ses-419!2smx!4v1712433148793!5m2!1ses-419!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Fiesta',
        time: '7:00 p.m.',
        placeName: 'Salón Disco Arlequín',
        address: 'Av, Cuahutemoc 9, Ixtapaluca, San Juan Tlalpizahuac, 56560 Ciudad de México, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.2343270879229!2d-98.9477994!3d19.3285265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d94c244b573%3A0x985fcf20f1b9c9d!2sSal%C3%B3n%20Disco%20Arlequ%C3%ADn!5e0!3m2!1ses-419!2smx!4v1712433432843!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


