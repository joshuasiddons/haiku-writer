import styles from './HiddenTextArea.module.scss';

function HiddenTextArea({ elementID, autoFocus }) {

    const resizeBox = () => {
        const box = document.getElementById(elementID);
        box.style.height = 0;
        box.style.height = box.scrollHeight + 'px';

        console.log(document.documentElement.clientWidth)
        console.log(box.style.width)
        if (box.style.width < 0.8 * document.documentElement.clientWidth) {
            console.log("hi");
            box.style.width = box.scrollWidth + 'px';
        }
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