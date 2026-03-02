import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID }) {
    return (
        <textarea name="input" id={elementID} className={styles.hiddenTextArea} cols="30" rows="10"></textarea>
    )
}

export default HiddenTextArea;