//Import React from 'react';
import React from 'react';
import './assets/css/common.scss';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar/sidebar';
import CommentDetail from './commentDetail/commentDetail';
import ApprovalCard from './ApprovalCard/ApprovalCard';
import Geolocation from './geolocation/geolocation';
const App = () =>{
    return (
        <div>
            <Sidebar />
            <div className="dashboar">
                <div className="dash">
                    <CommentDetail name="Rakesh" date="12-02-2020" profilePicture="./assets/images/b-user-bg.png"/>
                    <CommentDetail name="Rajesh Kumar Verma" date="12-09-2019" profilePicture="./assets/images/b-user-bg.png"/>
                    <ApprovalCard>
                        <CommentDetail name="Shyam Kumar Sharma" date="02-12-2020" profilePicture="./assets/images/b-user-bg.png"/> 
                    </ApprovalCard>
                    <ApprovalCard>
                        <CommentDetail name="Palvi Dhawan" date="12-05-2020" profilePicture="./assets/images/b-spanding-bg.png"/>               
                    </ApprovalCard>
                    <Geolocation/>
                </div>                
            </div>
        </div>
    ) ;
};


// Take the react component and show it on the screen

ReactDOM.render(<App/>, document.querySelector('#root'));