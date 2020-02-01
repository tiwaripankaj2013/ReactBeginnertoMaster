import React from 'react';
import './commentDetail.scss';
const CommentDetail = (props) => {
    // console.log(props);
    return (
        <div className="row mt10">
            <div className="col-md-3">
                <a href="./" className="profile-picture">
                    <img className="img-responsive" alt="placeholder" src={require("../assets/images/b-user-bg.png")} />
                </a>
            </div>
           <div className="col-md-6">
               <p className="text-primary">{props.name}</p>
           </div>
           <div className="col-md-3">
               <p className="date">{props.date}</p>
           </div>
           {/* <div className="col-md-12">
               <button className="btn btn-primary mt10 mr15">Save</button>
               <button className="btn btn-danger mt10">Reject</button>
           </div> */}
        </div>
    );
};

export default CommentDetail;