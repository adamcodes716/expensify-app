import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();  // a spy
  const wrapper = shallow(<Header startLogout={startLogout} />); // pass in spy 
  wrapper.find('button').simulate('click'); // press the button
  expect(startLogout).toHaveBeenCalled(); 
});


