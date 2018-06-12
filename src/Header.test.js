import React from 'react';
import Header from './Header';

import { shallow } from 'enzyme';

it('renders the specitic texts in header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toMatch(/Let's/);
    expect(wrapper.find('p').text()).toEqual('Think you have what it takes? Show us.');
})