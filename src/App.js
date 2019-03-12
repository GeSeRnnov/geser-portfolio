import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ShortIntro from './components/ShortIntro';
import ExamplesTab from './components/ExamplesTab';
import Resume from './components/Resume';
import SendMail from './components/SendMail';

class App extends Component {

render() {
    return (
      <div>
        <div id="anchor-home"/>
        <Header />
        <ShortIntro /> 
        <div id="anchor-example"/>
        <ExamplesTab />
        <div id="anchor-resume"/>
        <Resume />
        <footer>
        	<SendMail />
        </footer>
      </div>
    );
}} 


export default App;
