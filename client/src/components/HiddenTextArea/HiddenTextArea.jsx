import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID }) {

    const resizeBox = () => {
        const box = document.getElementById(elementID);
        box.style.height = 0;
        box.style.height = box.scrollHeight + 'px';
    }

    return (
        <textarea
            name='input'
            id={elementID}
            className={styles.hiddenTextArea}
            onInput={resizeBox}
            cols='30'
            rows='1'
        ></textarea>
    )
}

export default HiddenTextArea;