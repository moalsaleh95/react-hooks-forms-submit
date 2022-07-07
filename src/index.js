import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Form from './components/Form'
const container = document.getElementById('root')
const root = createRoot(container)
// ReactDOM.render(
//   <Form />,
//   document.getElementById('root')
// );
root.render(<Form />);