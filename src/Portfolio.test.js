import React from 'react';
import Portfolio from './Portfolio';

import { shallow } from 'enzyme';

it('renders the heading of component portfolio', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper.find('h3').text()).toMatch(/Portfolio/);

})