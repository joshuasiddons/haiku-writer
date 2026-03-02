import { useState } from 'react';
import './App.scss';
import HiddenTextArea from "./components/HiddenTextArea/HiddenTextArea.jsx";
import TextAreaStats from "./components/TextAreaStats/TextAreaStats.jsx";

function App() {
    const [chars, setChars] = useState(0);
    const [lines, setLines] = useState(0);

    const thisTextArea = document.getElementById('HiddenTextArea');

    const selectText = () => {
        thisTextArea.focus();
    }

    return (
        <div className='App' onClick={selectText}>
            <div className='TextAreaContainer'>
                <HiddenTextArea
                    elementID='HiddenTextArea'
                    autoFocus={true}
                    setChars={setChars}
                    setLines={setLines}
                />
            </div>
            <TextAreaStats chars={chars} lines={lines} />
        </div>
    )
}

export default App
