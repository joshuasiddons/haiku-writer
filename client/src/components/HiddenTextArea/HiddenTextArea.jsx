import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID, autoFocus }) {

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
            autoFocus={autoFocus}
            onInput={resizeBox}
            autoComplete='off'
            rows='1'
        ></textarea>
    )
}

export default HiddenTextArea;