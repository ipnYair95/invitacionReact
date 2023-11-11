import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

export interface IGif {
    title: string;
    ICON: any;
}

export const GIFS: IGif[] = [
    { title: "Venir guapo", ICON: FaceRetouchingNaturalOutlinedIcon },
    { title: "Con ganas de bailar", ICON: NightlifeOutlinedIcon },
    { title: "Mi regalo uwu", ICON: CardGiftcardOutlinedIcon }
];