import React from 'react';
import './ApprovalCard.scss';
const ApprovalCard = (props) =>{
    
    return(
        <div className="row border2 mb10">
            {/*<div className="col-md-3">
                <div className="card">
                    <div className="box">
                        <div className="img">
                            <img src="https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg" />
                        </div>
                        <h2>Prakash Prajapati<br/><span>Web Graphic Designer</span></h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et.</p>
                        <span>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </span>
                    </div>
                </div>        
            </div>*/}
            <div className="col-md-9">
                {props.children}
            </div>    
            <div className="col-md-3 mb10">
                <button className="btn btn-success mt10 mr15">Accept</button>
                <button className="btn btn-danger mt10">Reject</button>
            </div>
        </div>
    );
};

export default ApprovalCard;