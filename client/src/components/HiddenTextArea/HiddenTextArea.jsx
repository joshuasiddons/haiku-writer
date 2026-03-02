import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID, doAutoFocus, setChars, setLines }) {
    const resizeBox = () => {
        const box = document.getElementById(elementID);
        box.style.height = '0';
        box.style.height = box.scrollHeight + 'px';

        const lh = parseInt(box.style.lineHeight);
        setChars(box.textLength);
        setLines(box.height / lh);
    }

    return (
        <textarea
            name='input'
            id={elementID}
            className={styles.hiddenTextArea}
            autoFocus={doAutoFocus}
            onInput={resizeBox}
            autoComplete='off'
            rows='1'
        ></textarea>
    )
}

export default HiddenTextArea;