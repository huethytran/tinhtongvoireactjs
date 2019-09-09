import React from 'react';
import ReactDOM from 'react-dom';
import TinhTong from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TinhTong />, div);
  ReactDOM.unmountComponentAtNode(div);
});
