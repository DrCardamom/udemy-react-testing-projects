import React from "react";

// no default value
const guessedWordsContext = React.createContext()

/**
 * @fucntion useGuessedWords
 * @returns {array} guessedWordsContest value, which is a state of [value, setter]
 */
function useGuessedWords() {
   // useContext is a hook that returns the context value
   // In this case, the context value is an [value, setter] array for the context state
   // useContext also subscribes to changes, and will update when the guessedWords context value updates
   // we've memoized this so that it will only update when guessedWords value 
   const context = React.useContext(guessedWordsContext)

   // throw an error if the context does not exist -- means we are not in a provider
   if(!context) {
      throw new Error('useGuessedWords must be used within a GuessedWordsProvider')
   }

   // otherwise return the context
   return context;
}

/**
 * @function GuessedWordsProvider
 * @param {object} props  props to pass throgh from declared component
 * @returns {JSX.element}  Provider component
 */
function GuessedWordsProvider(props) {
   // create state that will be used within a provider
   // initial state value is false
   const [guessedWords, setGuessedWords] = React.useState([])

   // value for the context provider will be an array of [value, setter] for guessedWords state
   // useMemo just ensures that the provider value only updates when guessedWords updates
   // no need to test this - React tests useMemo for us
   const value = React.useMemo(() => 
      [guessedWords, setGuessedWords], [guessedWords]
   )

   // Return a Provider component with the [value, setter] array as the value, passing through the props
   return <guessedWordsContext.Provider value={value} {...props} />
}

export default { useGuessedWords, GuessedWordsProvider }