import { mount, shallow, configure } from 'enzyme';
import Posts from '../components/Posts.js';
import React from 'react';

it('renders Posts component', ()=> {
  expect(shallow(<Posts />).length).toEqual(1);
})
const refr = "post";
it('component gets props',()=>{
  const wrapper = mount(<Posts refr={refr}/>);
  expect(wrapper.props().refr).toEqual("post");
})
