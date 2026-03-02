import './App.scss';
import HiddenTextArea from "./components/HiddenTextArea/HiddenTextArea.jsx";

function App() {
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
                />
            </div>
        </div>
    )
}

export default App
