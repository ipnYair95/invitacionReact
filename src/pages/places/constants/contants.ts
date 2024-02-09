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
        time: '15:00 Hrs',
        placeName: 'Parroquia de San Miguel Arcángel',
        address: 'C. Benito Juárez MZ138 LTSN, San Miguel Teotongo, Iztapalapa, 09630 Ciudad de México, CDMX',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1309.809508480618!2d-98.99140688667676!3d19.3502493484428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e29f60189441%3A0x210bd716f5c4d21c!2sParroquia%20de%20San%20Miguel%20Arc%C3%A1ngel!5e0!3m2!1ses-419!2smx!4v1707437699847!5m2!1ses-419!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Fiesta',
        time: '16:00 Hrs',
        placeName: 'Salón "Espinoza"',
        address: 'C. Benito Juárez MZ13 LT8, San Miguel Teotongo, Iztapalapa, 09630 Ciudad de México, CDMX',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1309.809508480618!2d-98.99140688667676!3d19.3502493484428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3b52e666707%3A0x4837f01deddc740e!2zU2Fsw7NuICJFc3Bpbm96YSI!5e0!3m2!1ses-419!2smx!4v1707437739976!5m2!1ses-419!2smx',
        img: IMG.FIESTA
    }
];


