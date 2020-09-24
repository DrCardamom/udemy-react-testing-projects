import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe('moxios tests', () => {
   beforeEach(() => {
      moxios.install()
   })

   afterEach(() => {
      moxios.uninstall()
   })

   test('calls the getSecretWord callback on axios response', async () => {
      const secretWord = 'party'
      moxios.wait(() => {
         const req = moxios.requests.mostRecent()
         req.respondWith({
            status: 200,
            response: secretWord
         })
      })

      // create mock for callback arg
      const mockSetSecretWord = jest.fn()

      await getSecretWord(mockSetSecretWord)

      expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)
   })

})