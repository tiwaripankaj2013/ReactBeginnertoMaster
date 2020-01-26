//Import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return (
        <div>
            <label className="label" for="name"></label>
            Hi welcome to learn react 
            <input id="name" type="text" />
            <button style={{background:'blue',color:'white'}}>save</button>
        </div>
    ) ;
};


// Take the react component and show it on the screen

ReactDOM.render(<App/>, document.querySelector('#root'));