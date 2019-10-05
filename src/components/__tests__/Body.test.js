import React from 'react';
import { shallow } from 'enzyme';
import Body from '../Body';

describe('Body', () => {
  let wrapper;
  beforeEach(()=> wrapper = shallow(<Body />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});