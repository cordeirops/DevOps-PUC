import logo from './logo.svg';
import './App.css';
import { Moda } from "./Teste";

function App() {
    const arr = [5, 2, 2, 3, 4, 5];
    const resultadoModa = Moda(arr);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    A moda do array é: {resultadoModa}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
