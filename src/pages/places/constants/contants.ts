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
        time: '6:40 p.m.',
        placeName: 'Salon Emperador',
        address: 'Colonia Santa Cruz Tlalpizahuac Calle Chinameca, Manzana 5 Lote 7, 56560 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4944033854326!2d-98.94827017545944!3d19.319481122380942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1feef22d4611%3A0xd3906bf7bf5c1604!2sSALON%20DE%20EVENTOS%20EL%20EMPERADOR!5e0!3m2!1ses-419!2smx!4v1713492420720!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


