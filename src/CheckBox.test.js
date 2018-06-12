import React from 'react';
import CheckBox from './CheckBox';

import { shallow } from 'enzyme';



it('renders the correct text in checkbox component', () => {
    const wrapper = shallow(
        <CheckBox
            data="Pokhara"
            id="Pokhara"
            check="city"
            key="Pokhara"
        />);
    expect(wrapper.find('label').text()).toMatch(/Pokhara/);

})



