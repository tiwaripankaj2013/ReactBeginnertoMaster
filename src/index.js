//Import React from 'react';
import React from 'react';
import './assets/css/common.scss';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar/sidebar';
const App = () =>{
  const buttonText= ['click me', 'welcome to learn react dev'];
    return (
        <div>
            <label className="label"></label>
            Hi welcome to learn react 
            <input id="name" type="text" />
            <button style={{background:'blue',color:'white'}}>{buttonText}</button>
            <Sidebar />
        </div>
        
    ) ;
};


// Take the react component and show it on the screen

ReactDOM.render(<App/>, document.querySelector('#root'));