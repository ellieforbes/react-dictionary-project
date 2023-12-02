
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       Dictionary
      </header>
      <main>
        <Dictionary defaultKeyword="dictionary"/>
      </main>
      <footer className="App-footer"><small>This project was coded by <a href="https://portfolio-byellieforbes.netlify.app/" target="_blank" rel="noreferrer"> Ellie Forbes </a> and is <a href="https://github.com/ellieforbes/react-weather-application" target="_blank" rel="noreferrer">open-sourced</a> on Github</small></footer>
      </div>
    </div>
  );
}

export default App;
