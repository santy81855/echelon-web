import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Input1 />
        </div>
    );
}

function Input1() {
    const numRows = (
        <div className="InputField">
            <div className="InputTitle">Number of rows:</div>
            <input type="text" className="Input"></input>
        </div>
    );
    const numCols = (
        <div className="InputField">
            <div className="InputTitle">Number of columns:</div>
            <input type="text" className="Input"></input>
        </div>
    );
    const resultType = (
        <div className="InputField">
            <div className="InputTitle">Result Type:</div>
            <select className="InputDropdown">
                <option className="DropdownItem" value="decimals">
                    Decimals
                </option>
                <option className="DropdownItem" value="fractions">
                    Fractions
                </option>
            </select>
        </div>
    );
    return (
        <div className="InputPage1">
            {numRows}
            {numCols}
            {resultType}
        </div>
    );
}

export default App;
