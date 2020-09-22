import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttr } from "../test/testUtils";

/**
 * Setup function for Input component
 * @returns {ShallowWrapper}
 */
const setup = () => {
   return shallow(<Input />)
}

test('Renders Input function without error', () => {
   const wrapper = setup();
   const component = findByTestAttr(wrapper, 'component-input')
   expect(component.length).toBe(1)
})