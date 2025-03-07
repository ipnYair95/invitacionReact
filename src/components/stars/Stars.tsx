import './Stars.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export const Stars = () => {
    return (
        <div id="estrellas">

            {
                Array.from({ length: 16 }, (_, index) => index + 1).map((element: any) => (
                    <i key={element} className="star-icon">
                        <StarBorderOutlinedIcon />
                    </i>
                ))

            }

        </div>
    )
}
