import React from "react";
import {shallow, mount} from "enzyme";

import successContext from "./successContext";

// functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
   successContext.useSuccess()
   return <div />;
}

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
   expect(() => {
      shallow(<FunctionalComponent />)
   }).toThrow('useSucsess must be used within SuccessProvider')
})

test('useSuccuess does not throw error when wrapped in SuccessProvider', () => {
   expect(() => {
      mount(
         <successContext.SuccessProvider>
            <FunctionalComponent />
         </successContext.SuccessProvider>
      )
   }).not.toThrow()
}) 