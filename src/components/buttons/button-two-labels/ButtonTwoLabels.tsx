import styles from './ButtonTwoLabels.module.scss';

export const ButtonTwoLabels = ({ onClick, labelPrimary = 'Hover me', labelSecondary = 'Hello' }: any) => {
    return (
        <button className={styles.buttonTwoLabels} onClick={onClick}  >
            <div>
                <span>
                    <p> {labelPrimary} </p>
                </span>
            </div>
            <div>
                <span>
                    <p> {labelSecondary} </p>
                </span>
            </div>
        </button>
    )
}
