import React from 'react';
import Info from './Info';

import { shallow } from 'enzyme';

it('renders the heading of component info', () => {
    const wrapper = shallow(<Info />);
    expect(wrapper.find('h3').text()).toMatch(/info/);
})