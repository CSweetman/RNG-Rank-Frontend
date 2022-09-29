import React from 'react';
import { render, screen } from '@testing-library/react';
import { Rolling } from './Rolling';

import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Rolling Test', () => {

    let wrapper: ShallowWrapper
    const POSSIBLE_NUMBERS_4DIE = ['1','2','3','4']
    beforeEach(() => {
        wrapper = shallow(<Rolling/>)
    })

    test('initial render of title', () => {
        expect(wrapper.find('#dice-title').text()).toBe('4-sided Dice');
    });

    test('initial render of dice', () => {
        expect(wrapper.find('#dice-value').text()).toBe('???')
    });

    test('rolling dice function', () => {
        expect(wrapper.find('#dice-value').text()).toBe('???')
        wrapper.find('#roll-button').simulate('click')
        expect(POSSIBLE_NUMBERS_4DIE).toContain(wrapper.find('#dice-value').text().substring(0,1))
    });

})


