import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();  // create a spy
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);  // pass in the spy
  wrapper.find('button').simulate('click');  // click the button
  expect(startLogin).toHaveBeenCalled();  
});
