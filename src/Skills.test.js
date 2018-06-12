import React from 'react';
import Skills from './Skills';

import { shallow } from 'enzyme';

it('renders the heading of component skills', () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper.find('h3').text()).toContain('Skills');
})