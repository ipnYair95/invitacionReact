import styles from './Stars.module.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export const Stars = () => {

    // Configuración de estrellas con propiedades aleatorias pero controladas
    const starConfigs = [
        { top: 12, left: 10, duration: 2, size: 1, delay: 0, blur: false },
        { top: 9, left: 40, duration: 4, size: 0.8, delay: 0.5, blur: true },
        { top: 13, left: 60, duration: 1.5, size: 1.2, delay: 0, blur: false },
        { top: 12, left: 88, duration: 2.5, size: 0.9, delay: 1, blur: true },
        
        { top: 33, left: 20, duration: 2, size: 1.1, delay: 0.3, blur: false },
        { top: 30, left: 35, duration: 1.2, size: 0.7, delay: 0, blur: true },
        { top: 28, left: 68, duration: 3.4, size: 1.3, delay: 0.7, blur: false },
        { top: 39, left: 98, duration: 3, size: 1, delay: 0, blur: true },
        
        { top: 47, left: 5, duration: 3, size: 0.9, delay: 0.5, blur: false },
        { top: 50, left: 30, duration: 2.2, size: 1.4, delay: 0, blur: false },
        { top: 55, left: 65, duration: 1, size: 0.8, delay: 0.8, blur: true },
        { top: 60, left: 90, duration: 2, size: 1.2, delay: 0.4, blur: false },
        
        { top: 65, left: 10, duration: 1.5, size: 1, delay: 0, blur: true },
        { top: 70, left: 40, duration: 2, size: 1.1, delay: 0.6, blur: false },
        { top: 75, left: 60, duration: 1.8, size: 0.75, delay: 0, blur: true },
        { top: 80, left: 85, duration: 1.3, size: 1.3, delay: 0.2, blur: false },

        { top: 85, left: 5, duration: 3, size: 0.9, delay: 0.5, blur: false },
        { top: 90, left: 30, duration: 2.2, size: 1.4, delay: 0, blur: false },
        { top: 95, left: 65, duration: 1, size: 0.8, delay: 0.8, blur: true },
        { top: 100, left: 90, duration: 2, size: 1.2, delay: 0.4, blur: false },

        { top: 105, left: 10, duration: 1.5, size: 1, delay: 0, blur: true },
        { top: 110, left: 40, duration: 2, size: 1.1, delay: 0.6, blur: false },
        { top: 115, left: 60, duration: 1.8, size: 0.75, delay: 0, blur: true },
        { top: 120, left: 85, duration: 1.3, size: 1.3, delay: 0.2, blur: false },

    ];

    return (
        <>
            <style>{`
               
            `}</style>

            <div className={styles.starContainer}>
                {starConfigs.map((config, index) => (
                    <div
                        key={index}
                        className={styles.starWrapper}
                        style={{
                            top: `${config.top}%`,
                            left: `${config.left}%`,
                            animationDuration: `${config.duration}s`,
                            animationDelay: `${config.delay}s`, 
                        }}
                    >                        
                        <i className={`${styles.starIcon} ${config.blur ? styles.starBlur : ''}`}
                           style={{
                               animationDuration: `${config.duration * 0.7}s`,
                               animationDelay: `${config.delay * 0.5}s`,
                           }}>
                            <StarBorderOutlinedIcon sx={{ fontSize: `${config.size * 36}px` }} />
                        </i>
                    </div>
                ))}
            </div>
        </>
    );
}
