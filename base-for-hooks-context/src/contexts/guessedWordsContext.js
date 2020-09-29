import React from "react";

// no default value
const guessedWordsContext = React.createContext()

/**
 * @function useGuessedWords
 * @returns {array} guessedWordsContext value, which is a value of [value, setter]
 */
export function useGuessedWords() {
   // useContext is a hook that returns the context value
   // In this case, the context value is an [value, setter] array for the context state
   // useContext also subscribe to changes, and will update any time the context value updates
   // we've memoized this so that it will only update the guessedWords value updates
   const context = React.useContext(guessedWordsContext)

   // throw an error if the context does not exist -- means we aren't in a provider
   if(!context) {
      throw new Error('useGuessedWordContext must be used within GuessedWordsProvider')
   }
   
   // otherwise return the context
   return context;
}           

/**
 * @function GuessedWordsProvider
 * @param {object} props - props to pass through from declared component
 * @return {JSX.element} - Provider component
 */
export function GuessedWordsProvider(props) {
   // create state that will be used within the provider
   // initial state value is an empty array
   const [guessedWords, setGuessedWords] = React.useState([])

   // value for the context provider will be array of [value, setter] for guessedWords state
   // useMemo just ensures that the provider value will only update when guessedWords updates
   // No need to test this -- React tests useMemo
   const value = React.useMemo(() => 
      [guessedWords, setGuessedWords], [guessedWords]
   )

   // Return a Provider component with the [value, setter] array as the value, passing through the props
   return <guessedWordsContext.provider value={value} {...props} />
}

export default { GuessedWordsProvider, useGuessedWords }