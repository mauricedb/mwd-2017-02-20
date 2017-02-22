import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';
import Counter from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders an `.App-logo`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('img.App-logo').length).toBe(1);
  });


  it ('Can incement', () =>{

    const wrapper = shallow(<Counter />)
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');

   expect(wrapper.state('counter')).toBe(2);

  })


it('App renders correctly', () => {
  const tree = renderer.create(
    <App now="12:15" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});