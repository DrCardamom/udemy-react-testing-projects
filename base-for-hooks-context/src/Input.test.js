import React from "react";
import { mount } from "enzyme";

import Input from "./Input";
import { findByTestAttr, checkProps } from "../test/testUtils";
import languageContext from "./contexts/languageContext";

// /**
//  * Setup function for Input component
//  * @returns {ShallowWrapper}
//  */
// const setup = (secretWord='party') => {
//    return shallow(<Input secretWord={secretWord} />)
// }

/**
 * Create ReactWrapper for Input component for testing
 * @param { object } testValues - Context and props values for this specific test
 * @returns { ReactWrapper } - Wrapper for Input component and providers
 */
const setup = ({ language, secretWord }) => {
   language = language || 'en'
   secretWord = secretWord || 'party'

   return mount(
      <languageContext.Provider value={language}>
         <Input secretWord={secretWord} />
      </languageContext.Provider>
   )
}

test('Input renders without error', () => {
   const wrapper = setup({});
   const component = findByTestAttr(wrapper, 'component-input')
   expect(component.length).toBe(1)
})

test('does not throw warning with expected props', () => {
   checkProps(Input, { secretWord: 'party'});
})

describe('languagePicker', () => {
   test('correctly renders submit string in English', () => {
      const wrapper = setup({ language: 'en'})
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.text()).toBe('Submit')
   })
   test('correctly renders submit string in emoji', () => {
      const wrapper = setup({ language: 'emoji'})
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.text()).toBe('🚀')
   })
})

describe('state controlled input field', () => {
   let mockSetCurrentGuess = jest.fn()
   let wrapper

   beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      React.useState = jest.fn(() => ["", mockSetCurrentGuess])
      wrapper = setup({})
   })

   test('state updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      
      // simulate an input box getting a new input value 'train'
      const mockEvent = { target: { value: 'train' }}
      inputBox.simulate('change', mockEvent)

      // check if function mockSetCurrentGuess gets called with a parameter 'train'
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
   })

   test('field is cleared upon submit button click', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')

      // check if setCurrentGuess gets called with an empty string as a parameter
      submitButton.simulate('click', { preventDefault(){} })
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
   })
}) 