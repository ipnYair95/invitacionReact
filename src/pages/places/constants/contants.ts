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
        time: '5:45 p.m.',
        placeName: 'Iglesia Virgen del Carmen',
        address: 'Turqueza Manzana 003, Rancho el Carmen, 56540 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.8954166845359!2d-98.93866720281613!3d19.3231158919611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dc25c706a0d%3A0x104cf4ee57b10a82!2sIglesia%20Virgen%20del%20Carmen!5e0!3m2!1ses-419!2smx!4v1760022208509!5m2!1ses-419!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Fiesta',
        time: '7:30 p.m.',
        placeName: 'Salón de eventos el emperador',
        address: 'Colonia Santa Cruz Tlalpizahuac Calle Chinameca, Manzana 5 Lote 7, 56560 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.1332253646797!2d-98.94660813271506!3d19.320024400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1feef22d4611%3A0xd3906bf7bf5c1604!2sSALON%20DE%20EVENTOS%20EL%20EMPERADOR!5e0!3m2!1ses-419!2smx!4v1760022426693!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


