import React from "react";
import PropTypes from "prop-types";

import successContext from "./contexts/successContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

function Input({ secretWord }) {
   const language = React.useContext(languageContext)
   const [success, setSuccess] = successContext.useSuccess()
   const [ currentGuess, setCurrentGuess ] = React.useState('');

   if(success) {return null}

   return (
      <div data-test='component-input'>
         <form className='form-inline'>
            <input 
               data-test='input-box'
               className='mb-2 mx-sm-3' 
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
                  if(currentGuess === secretWord) {
                     setSuccess(true)
                  }
                  // clear input box
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