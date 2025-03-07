import { IMG } from "../../../assets";

export interface IItineraryItem {    
    hour: string;
    description: string;
    image: any;
}

export const ITINERARY_ITEMS: IItineraryItem[] = [
    {         
        hour: '3:00 PM',      
        description: 'Recepción',
        image: IMG.STEP1
    },
    {               
        hour: '3:30 PM',
        description: 'Entrada de los novios',
        image: IMG.STEP2
    },
    {               
        hour: '4:00 PM',
        description: 'Ceremonia civil',
        image: IMG.STEP3
    },
    {               
        hour: '4:30 PM',
        description: 'Buen provecho',
        image: IMG.STEP4
    },
    {               
        hour: '5:30 PM',
        description: 'Partida de pastel',
        image: IMG.STEP5
    },
    {             
        hour: '6:00 PM',  
        description: 'Fiesta',
        image: IMG.STEP6
    },
    {               
        hour: '10:00 PM',
        description: 'Gracias por venir',
        image: IMG.STEP7
    }
    
];