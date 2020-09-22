import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
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
               placeholder='enter guess'
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
               Submit
            </button>
         </form>
      </div>
   )
}

Input.propTypes = {
   secretWord: PropTypes.string.isRequired,
}

export default Input;