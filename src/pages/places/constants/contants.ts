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
        reason: 'Ceremonia religiosa',
        time: '2:00 p.m.',
        placeName: 'Iglesia de la virgen de Ocotlán',
        address: 'Centro de Camotepec, Zacatlán Puebla',
        url: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d253.2819385640659!2d-98.06838151017851!3d20.047352212528963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAyJzUwLjQiTiA5OMKwMDQnMDUuNSJX!5e0!3m2!1sen!2smx!4v1742498256235!5m2!1sen!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Recepción',
        time: '4:00 p.m.',
        placeName: '',
        address: '',
        url: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d510.9587389617338!2d-98.08193092559777!3d20.03351922262161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAyJzAxLjMiTiA5OMKwMDQnNTQuNCJX!5e0!3m2!1sen!2smx!4v1742498327510!5m2!1sen!2smx',
        img: IMG.FIESTA
    }
];


