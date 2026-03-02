import './App.scss';
import HiddenTextArea from "./components/HiddenTextArea/HiddenTextArea.jsx";

function App() {

    const selectText = () => {
        document.getElementById('HiddenTextArea').focus();
    }

    return (
        <div className="App" onClick={selectText}>
            <HiddenTextArea
                elementID="HiddenTextArea"
            />
        </div>
    )
}

export default App
