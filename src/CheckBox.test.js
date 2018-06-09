import React from 'react';
import CheckBox from './CheckBox';

import { shallow } from 'enzyme';

it('renders the checkbox', () => {
    const wrapper = shallow(
        <CheckBox
            data="Pokhara"
            id="Pokhara"
            check="city"
            key="Pokhara" />);
    expect(wrapper.find('label').text()).toEqual('Pokhara');

})

it('renders the delete', () => {
    const wrapper = shallow(
        <CheckBox
            data="Pokhara"
            id="Pokhara"
            check="city"
            key="Pokhara" />);

    expect(wrapper.find('span').text()).toEqual('Delete');
});

