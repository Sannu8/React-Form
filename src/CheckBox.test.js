import React from 'react';
import CheckBox from './CheckBox';

import { shallow } from 'enzyme';

it('renders the checkbox and Delete', () => {
    const wrapper = shallow(
        <CheckBox
            data="Pokhara"
            id="Pokhara"
            check="city"
            key="Pokhara" />);
    expect(wrapper.find('label').text()).toEqual('Pokhara');
    expect(wrapper.find('span').text().toEqual('Delete'))
})

