import React from 'react';

import guessedWordsContext from "./contexts/guessedWordsContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords()
  const language = React.useContext(languageContext)
  let contents
<<<<<<< HEAD

  if (guessedWords.length === 0) {
=======
  if (props.guessedWords.length === 0) {
>>>>>>> parent of a1c0790... Add guessedWordsContext.js
    contents = (
      <span data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={ index }>
        <td>{ word.guessedWord }</td>
        <td>{ word.letterMatchCount }</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{stringsModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
              <th>{stringsModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  );
};

// GuessedWords.propTypes = {
//   guessedWords: PropTypes.arrayOf(
//     PropTypes.shape({
//       guessedWord: PropTypes.string.isRequired,
//       letterMatchCount: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default GuessedWords;