import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID, doAutoFocus, setChars, setLines }) {
    const resizeBox = () => {
        const box = document.getElementById(elementID);
        box.style.height = '0';
        box.style.height = box.scrollHeight + 'px';

        const lh = 2 * parseInt(getComputedStyle(document.documentElement).fontSize);

        setChars(box.textLength);
        console.log(box.style.height);
        console.log(lh);
        setLines((parseInt(box.style.height) - 10) / lh);
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