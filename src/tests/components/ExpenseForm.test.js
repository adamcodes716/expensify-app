import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense ={ expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=> {}  // this acounts for "e"
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set descripton on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { //finds the first input only
        target: {value} // simulates e.target.value
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { //would find any text area
        target: {value} // simulates e.target.value
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input', () => {
    //should set amount if valid input 23.50
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { //finds the second input only
        target: {value} // simulates e.target.value
    });
    expect(wrapper.state('amount')).toBe(value);
   
});

test('should NOT set amount on invalid valid input', () => {
    //should set amount if invalid input 12.122
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { //finds the second input only
        target: {value} // simulates e.target.value
    });
    expect(wrapper.state('amount')).toBe('')
});

