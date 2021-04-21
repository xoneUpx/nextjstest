

import { shallow, mount, configure } from 'enzyme';
import Content from '../components/Content.js';
import React from 'react';

it('renders Content compoonent', ()=> {
  expect(shallow(<Content />).length).toEqual(1);
})
const items = "header";
it('component gets props',()=>{
  const wrapper = mount(<Content items={items}/>);
  expect(wrapper.props().items).toEqual("header");
})
