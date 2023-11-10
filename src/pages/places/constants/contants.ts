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
        time: '12:00 Hrs',
        placeName: 'Parroquia del Señor de la Misericordia',
        address: 'Ahuehuete n, Izcalli, 56566 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.1814219194497!2d-98.93656946514689!3d19.318711573713696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dc4b2880213%3A0xa6af91eb6f0e78eb!2sParroquia%20del%20Se%C3%B1or%20de%20la%20Misericordia!5e0!3m2!1ses-419!2smx!4v1699590710543!5m2!1ses-419!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Misa',
        time: '12:00 Hrs',
        placeName: 'Parroquia del Señor de la Misericordia',
        address: 'Ahuehuete n, Izcalli, 56566 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.1814219194497!2d-98.93656946514689!3d19.318711573713696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dc4b2880213%3A0xa6af91eb6f0e78eb!2sParroquia%20del%20Se%C3%B1or%20de%20la%20Misericordia!5e0!3m2!1ses-419!2smx!4v1699590710543!5m2!1ses-419!2smx',
        img: IMG.MISA
    }
];

