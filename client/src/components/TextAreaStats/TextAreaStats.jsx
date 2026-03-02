import styles from './TextAreaStats.module.scss';

function TextAreaStats({ chars, lines }) {
    return (
        <div className='textAreaStats'>
            <p>chars: {chars}</p>
            <p>lines: {lines}</p>
        </div>
    )
}

export default TextAreaStats;