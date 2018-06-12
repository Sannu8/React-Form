import React from 'react';
import Radio from './Radio';

import { shallow } from 'enzyme';

it('renders the radio button', () => {
    const wrapper = shallow(
        <Radio
            data="Pokhara"
            id="Pokhara"
            checked="city"
            key="Pokhara" />);
    expect(wrapper.find('li').text()).toEqual('Pokhara');
})