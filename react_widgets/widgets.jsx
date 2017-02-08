import React from 'react';
import ReactDOM from 'react-dom';


import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Root extends React.Component{
  render() {
    return(
      <div>
        <Clock />
        <Weather />
        <Tabs panes = {Panes}/>
        <Autocomplete names = {Names}/>
      </div>
    )
  }
}

const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];


const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];



document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
