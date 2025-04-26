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
        time: '16:00 p.m.',
        placeName: 'Parroquia de Santa María Magdalena de Tlapacoya',
        address: 'Plazuela Principal 3, Sta Cruz Tlapacoya, 56577 Ixtapaluca, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.68863855441106!2d-98.91243719243614!3d19.303702330995254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e62bafef7fd%3A0xe833e73c04ca60e8!2sParroquia%20de%20Santa%20Mar%C3%ADa%20Magdalena%20de%20Tlapacoya!5e0!3m2!1ses!2smx!4v1745633024625!5m2!1ses!2smx',
        img: IMG.MISA
    },
    {
        reason: 'Fiesta',
        time: '17:00 p.m.',
        placeName: '',
        address: 'Vicente Iglesias 1, 56609 Col. Calle Santa Cruz Amalinalco, Méx.',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d470.7539210037744!2d-98.87802374787482!3d19.281002055057197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1745633201015!5m2!1ses!2smx',
        img: IMG.FIESTA
    }
];


