//Import React from 'react';
import React from 'react';
import './assets/css/common.scss';
import ReactDOM from 'react-dom';
// import Sidebar from './sidebar/sidebar';
// import CommentDetail from './commentDetail/commentDetail';
// import ApprovalCard from './ApprovalCard/ApprovalCard';
// import Geolocation from './geolocation/geolocation';
class App extends React.Component{
    constructor(props){
        super(props);
        // this is the only we do direct assignment 
        this.state = {lat:null,long:null};
   
        window.navigator.geolocation.getCurrentPosition(
            position  => {
                this.setState({lat:position.coords.latitude,long:position.coords.longitude});
            },
            err => console.log(err)
        );
    }
    render(){
    return (
        <div>Lattitude : {this.state.lat}</div>
        
        )
    }
}
// Take the react component and show it on the screen

ReactDOM.render(<App/>, document.querySelector('#root'));