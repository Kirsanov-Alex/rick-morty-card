import "./App.css";
import Card from "./components/Card"
import {useState, useEffect, React} from 'react';

function App() {

  // function genRandom () {
  //   return Math.round(20*Math.random());
  // }
  // function genArray(){
  //   for (let i = 0; i < 10; i++){
  //     push(genRandom());
  //   }
  // }

  // const [character, setCharacters] = useState([]);

  // const initialUrl = 'https://rickandmortyapi.com/api/character';

  // const fetchCards = (url) => {
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => setCharacters(data.results))
  //   .catch((error) => console.log(error))
  // }
  // useEffect (() => {
  //   fetchCards(initialUrl);
  // }, []);

  return (
    <div>
      <header>
        <a href ="/" onClick={}>Rick and Morty Cards</a>
      </header>
      <Card character={character}/>
    </div>
  );
}

export default App;
