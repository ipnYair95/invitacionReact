import { nanoid } from 'nanoid';
import './Stars.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export const Stars = () => {
    return (
        <div id="estrellas">

            {
                Array.from({ length: 16 }).map(() => (
                    <i key={nanoid()} className="star-icon">
                        <StarBorderOutlinedIcon />
                    </i>
                ))

            }

        </div>
    )
}
