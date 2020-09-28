import React from "react";
import PropTypes from "prop-types";

import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

const Input = ({ secretWord }) => {
   const language = React.useContext(languageContext)

   const [ currentGuess, setCurrentGuess ] = React.useState('');

   return (
      <div data-test='component-input'>
         <form action="">
            <input 
               className='mb-2 mx-sm-3' 
               data-test='input-box'
               type='text'
               value={currentGuess}
               onChange={e => setCurrentGuess(e.target.value)}
               placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
            />
            <button
               data-test='submit-button'
               onClick={() => {
                  // TODO: update guessedwords
                  // TODO: check against secretWord and update success if needed
                  setCurrentGuess('')
               }}
               className='btn btn-primary mb-2'
            >
               {stringsModule.getStringByLanguage(language, 'submit')}
            </button>
         </form>
      </div>
   )
}

Input.propTypes = {
   secretWord: PropTypes.string.isRequired,
}

export default Input;