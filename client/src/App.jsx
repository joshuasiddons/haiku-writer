import { useState } from 'react';
import './App.scss';
import HiddenTextArea from "./components/HiddenTextArea/HiddenTextArea.jsx";
import TextAreaStats from "./components/TextAreaStats/TextAreaStats.jsx";

function App() {
    const [chars, setChars] = useState(0);
    const [lines, setLines] = useState(0);

    const selectText = () => {
        document.getElementById('HiddenTextArea').focus();
    }

    return (
        <div className='App' onClick={selectText}>
            <div className='TextAreaContainer'>
                <HiddenTextArea
                    elementID='HiddenTextArea'
                    doAutoFocus={true}
                    setChars={setChars}
                    setLines={setLines}
                />
            </div>
            <div className='StatsContainer'>
                <TextAreaStats chars={chars} lines={lines} />
            </div>
        </div>
    )
}

export default App
