//Import React from 'react';
import React from 'react';
import './assets/css/common.scss';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar/sidebar';
const App = () =>{
    return (
        <div>
            <Sidebar />
        </div>
        
    ) ;
};


// Take the react component and show it on the screen

ReactDOM.render(<App/>, document.querySelector('#root'));