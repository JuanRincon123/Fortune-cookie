import './App.css';
import PhrasesCard from './components/PhrasesCard';
import ButtonPhrases from './components/ButtonPhrases'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray';
import { useState } from 'react';

const arrBackground = [1, 2, 3, 4]
function App() {

  const startValue = randomElementFromArray(phrases)
  const startPath = randomElementFromArray(arrBackground)

  const [phrasesRandom, setPhrasesRandom] = useState(startValue)
  const [pathRandom, setPathRandom] = useState(startPath)


  const objStyle = {
    backgroundImage: `url('/img/fondo${pathRandom}.jpg')`
  }

  console.log(startPath)

  return (
    <div style={objStyle} className='app'>
      <h1 className=' app__title '>Fortune cookie</h1>
      <ButtonPhrases  setPhrasesRandom={setPhrasesRandom} setPathRandom={setPathRandom} arrBackground={arrBackground} />
      <PhrasesCard phrasesRandom={phrasesRandom}  />
    </div>
  );
}

export default App;
