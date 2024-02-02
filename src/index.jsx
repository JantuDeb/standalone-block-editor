import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor'; // Ensure this points to your actual Editor component file
import './styles.scss'; // Importing styles

// Directly render the Editor component without waiting for DOMContentLoaded,
// since scripts in modules are deferred by default and will run after the document is parsed.
// Additionally, we're targeting the 'app' element, assuming it exists in your HTML.
ReactDOM.render(
  <Editor />,
  document.getElementById('app')
);
