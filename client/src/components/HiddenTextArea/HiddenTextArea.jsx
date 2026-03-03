import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID, doAutoFocus, setChars, setLines }) {
    const inputAction = () => {
        const box = document.getElementById(elementID);
        box.style.height = '0';
        box.style.height = box.scrollHeight + 'px';

        const chars = box.textLength;
        setChars(chars);
        let lines = chars === 0 ? 0 : (parseInt(box.style.height) / parseInt(getComputedStyle(box).lineHeight))
        setLines(lines);
    }

    return (
        <textarea
            name='input'
            id={elementID}
            className={styles.hiddenTextArea}
            autoFocus={doAutoFocus}
            onInput={inputAction}
            autoComplete='off'
            rows='1'
        ></textarea>
    )
}

export default HiddenTextArea;