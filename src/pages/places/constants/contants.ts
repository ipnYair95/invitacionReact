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
        time: '5:00 p.m.',
        placeName: '',
        address: 'Col. Ilhuicamina Manza 13 Lote 16, 56566 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.30450754730938!2d-98.9336987459093!3d19.331354611844883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1de6763123b3%3A0xc0507e5c59793578!2sExpendio%20De%20Pan%20%22Alex%22!5e0!3m2!1ses-419!2smx!4v1750695141710!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


