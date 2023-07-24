import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'


// eslint-disable-next-line react/prop-types
const ButtonPhrases = ({ setPhrasesRandom, arrBackground, setPathRandom }) => {


  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrase)
    setPhrasesRandom(newRandomPhrase)

    const newPath = getRandomElementFromArray(arrBackground)
    setPathRandom(newPath)
  }

  return (
    <button className="app__btn" onClick={handleRandomPhrase}>Try your luck</button>
  )
}

export default ButtonPhrases