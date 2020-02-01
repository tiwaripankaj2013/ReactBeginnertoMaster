import React from "react";
import "./sidebar.css";

class Sidebar extends React.Component {
  state = {
    isSideBarVisible:true,
    flyList:false
  };
  toggleBox = () => {
    this.setState(prevState => ({ isSideBarVisible: !prevState.isSideBarVisible }));
  };
  toggleFlylistHandler = () => {
    this.setState(lastState => ({flyList: !lastState.flyList}))
  };
  render() {
    const { isSideBarVisible } = this.state;
    return (
      <div className="dashboar">
        <div className="leftMenuBar1">
          <div className="logo text-center">
            <img src={require("../assets/images/Group.png")} alt="logo" />
          </div>
          <div class="menue text-center">
            <a>
              <span className="fIcon icon-list ifit" onClick={this.toggleBox}></span>
            </a>
          </div>
          <div className="bst">
            <div className="avatar">
              <h4 className="avatar-text">NK</h4>
            </div>
            <div className="flylist">
              <div className="flylist-link">
                <a className="">
                  <i className="custom-icon icon-user pr10"></i>Profile
                </a>
                <a className="">
                  <i className="custom-icon icon-sign-out pr10"></i>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`sideMenue ${isSideBarVisible ? "": "open"}`}>
          <div className="form-group">
          <h3 className="title">Sygnio Sections</h3>
          <div style={{ background: '#F18C16', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-menu"></i>
            <p>Dashboard</p>
          </div>
          {/* <div style={{ background: '#05DCC2', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-floor"></i>
            <p>Membership</p>
          </div> */}
          <div style={{ background: '#F0C734', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-staff-user"></i>
            <p>Staff Management</p>
          </div>
          <div style={{ background: '#E065E2', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-floor"></i>
            <p>Floor Management</p>
          </div>
          <div style={{ background: '#17D463', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-pos"></i>
            <p>Inventory Management</p>
          </div>
          <div style={{ background: '#1688F1', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-transactions"></i>
            <p>POS</p>
          </div>
          <div style={{ background: '#6C63FF', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-transactions"></i>
            <p>Transactions</p>
          </div>
          <div style={{ background: '#355FCA', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-report"></i>
            <p>Reports</p>
          </div>
          <div style={{ background: '#A64EFF', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-customer"></i>
            <p>Customers</p>
          </div>
          <div style={{ background: '#58B8AC', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-setting"></i>
            <p>Settings</p>
          </div>
          {/* <div style={{ background: '#16CAF1', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-floor"></i>
            <p>Gift cards</p>
          </div> */}
          <div style={{ background: '#4D77A7', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-order"></i>
            <p>Orders</p>
          </div>
          {/* <div style={{ background: '#4D77A7', cursor: 'pointer' }} className="sideMenueWidgit text-center">
            <i className="custom-icon icon-floor"></i>
            <p>Deposits</p>
          </div> */}
        </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
