
import { mount, shallow, configure } from 'enzyme';
import Header from '../components/Header.js';
import React from 'react';

it('renders Header compoonent', ()=> {
  expect(shallow(<Header />).length).toEqual(1);
})
const refr = "header";
it('component gets props',()=>{
  const wrapper = mount(<Header refr={refr}/>);
  expect(wrapper.props().refr).toEqual("header");
})
